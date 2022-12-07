const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');
const load = require('./fhir/load');

/**
 * Converts a YAML data object to its corresponding FHIR instance using the appropriate
 * config specifications for that version of FHIR.
 * @param {object} yamlObject - the JavaScript object representing one of the YAML data entries
 * @param {string} patientId - the patientId to associate the instance to (if applicable)
 * @param {string} fhirVersion - the FHIR version (dstu2, stu3, r4, or a version number)
 * @returns {object} a JSON-formatted FHIR instance
 */
function yaml2fhir(yamlObject, patientId, fhirVersion) {
  // Re-assign yamlObject to input (which will get re-assigned again when merging default values)
  // and ensure it has a resourceType
  let input = yamlObject;
  if (input.resourceType == null) {
    throw new Error('Each data object must specify its "resourceType"');
  }

  // normalize on release (dstu2/stu3/r4) rather than numeric version
  let release = fhirVersion;
  if (/^1\.0\.\d$/.test(fhirVersion)) {
    release = 'dstu2';
  } else if (/^3\.0\.\d$/.test(fhirVersion)) {
    release = 'stu3';
  } else if (/^4\.0\.\d$/.test(fhirVersion)) {
    release = 'r4';
  }
  // load up the FHIR definitions so we can reference them as we build the instance
  const fhir = load(release);
  if (fhir == null) {
    throw new Error(`Unsupported version of FHIR: ${fhirVersion}`);
  }
  // Get the specific FHIR definition for this resource type
  const sd = fhir.findResource(input.resourceType);
  if (sd == null) {
    throw new Error(`Unsupported resourceType: ${input.resourceType}`);
  }
  // Get the specific configuration for this resource type
  const cfg = fhir.config.findResource(input.resourceType);
  if (cfg && cfg.defaults) {
    // Update the input to be the merge of the yaml input into the default values
    input = Object.assign({}, cfg.defaults, input);
  }

  // Create the result object, set the resourceType, and put in an id placeholder
  const result = {
    resourceType: sd.id,
    id: sd.id === 'Patient' ? getId(patientId) : getId()
  };

  // If the config specifies a patient field, set it to the patient ID
  if (cfg && cfg.patient && patientId) {
    result[cfg.patient] = getPatientReference(patientId);
  }

  // Assign all of the specified properties from the input and return the result
  return assignProperties(input, input, sd.snapshot.element, fhir, cfg, result);
}

/**
 * Assigns properties from the input YAML object to the result object
 * @param {object} yamlResource - the original YAML resource object
 * @param {object} input - the YAML object we're assigning, which may be nested somewhere in the yamlResource
 * @param {object[]} scopedElements - the StructureDefinition elements pertaining to the specified input
 * @param {FHIRDefinition} fhir - the FHIR definitions to allow lookup of FHIR types
 * @param {object} config - the optional configuration for this resource
 * @param {object} result - the optional result object to write output properties to
 * @returns {object} the final result
 */
function assignProperties(yamlResource, input, scopedElements, fhir, config = {}, result = {}) {
  // Loop through the input assigning into the result as appropriate
  for (const key of Object.keys(input)) {
    if (key === 'resourceType') {
      continue;
    }
    let fhirKey = key;
    if (config && config.aliases && config.aliases[key] != null) {
      fhirKey = config.aliases[key];
    }
    // Find the StructureDefinition element that matches the input key
    const element = findElement(scopedElements, fhirKey);
    if (element == null) {
      throw new Error(`Path not found: ${scopedElements[0].path}.${key}`);
    }
    // Set the value in the result object
    result[fhirKey] = getValue(yamlResource, input[key], element, scopedElements, fhir);
  }
  return result;
}

/**
 * Searches through a set of ElementDefinitions looking for one whose property name matches
 * the input property
 * @param {object[]} scopedElements - the StructureDefinition elements to search through
 * @param {string} property - the property name for the element we want to find
 * @returns {object | undefined} the matching ElementDefinition or undefined if not found
 */
function findElement(scopedElements, property) {
  const wantedPath = `${scopedElements[0].path}.${property}`;
  let element = scopedElements.find(e => e.path === wantedPath);
  if (element == null) {
    // This may be a choice property (e.g., valueQuantity for value[x] element).
    // Try to find a match on choices
    for (const choiceEl of scopedElements.filter(e => e.path.endsWith('[x]'))) {
      const typeMatch = choiceEl.type.find(t => choiceEl.path.replace(/\[x]$/, _.upperFirst(t.code)) === wantedPath);
      if (typeMatch) {
        // To ease the further processing, reduce the type array to only the one that matches
        element = _.cloneDeep(choiceEl);
        element.type = [typeMatch];
        break;
      }
    }
  }
  return element;
}

/**
 * Gets a FHIR-formatted value for the input value from YAML, using the FHIR definitions to determine type
 * @param {object} yamlResource - the original YAML resource object
 * @param {*} yamlValue - the value from the YAML (may be a simple or complex value)
 * @param {object} element - the ElementDefinition pertaining to the value, used to determine result type
 * @param {object[]} scopedElements - the full set of ElementDefinitions from which element came
 * @param {FHIRDefinition} fhir - the FHIR definitions to allow lookup of FHIR types
 * @param {boolean} skipCardCheck - determines if the cardinality should be checked (defaults to false)
 */
function getValue(yamlResource, yamlValue, element, scopedElements, fhir, skipCardCheck = false) {
  if (yamlValue == null) {
    return yamlValue;
  }
  let typeCode;
  // If there is only one type or there are multiple but they have the same code (e.g., Reference), then get the code
  if (element.type && element.type.length > 0 && element.type.every(t => t.code === element.type[0].code)) {
    typeCode = element.type[0].code;
  }
  if (typeCode && typeCode.startsWith('http://hl7.org/fhirpath/')) {
    // This is one of the special "compiler magic" types.  Use the fhir-type extension to get the "real type"
    // See: http://hl7.org/fhir/R4/extension-structuredefinition-fhir-type.html
    const typeExt = element.type[0].extension.find(e => e.url === 'http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type');
    if (typeExt && typeExt.valueUrl) {
      typeCode = typeExt.valueUrl;
    }
  }
  if (!skipCardCheck) {
    if (element.max === '0') {
      // Don't allow a value if the FHIR definition says no value is allowed
      throw new Error(`Cannot set ${element.path} because its max is 0`);
    }
    if (element.max !== '1') {
      // This is expecting an array -- if input is not an array, force it into an array
      const yamlValueArray = Array.isArray(yamlValue) ? yamlValue : [yamlValue];
      return yamlValueArray.map(v => getValue(yamlResource, v, element, scopedElements, fhir, true));
    }
    if (Array.isArray(yamlValue)) {
      // If we got here, it means the input is an array, but the element is not
      throw new Error(`${element.path} does not allow multiple values`);
    }
  }

  // Support complex objects via recursion
  if (typeof yamlValue === 'object' && !(yamlValue instanceof  Date)) {
    // Support the special $ constructs
    if (yamlValue['$if-present']) {
      // This is a conditional construct to determine the value.
      // Evaluate the condition and modify the value accordingly.
      const fieldToCheck = yamlValue['$if-present'];
      if (yamlResource[fieldToCheck] != null) {
        return getValue(yamlResource, yamlValue['$then'], element, scopedElements, fhir, skipCardCheck);
      } else if (yamlValue['$else']) {
        return getValue(yamlResource, yamlValue['$else'], element, scopedElements, fhir, skipCardCheck);
      }
    }
    // Get the subset of elements that includes the passed in element and its children (if applicable)
    const newScopedElements = scopedElements.filter(e =>  {
      return e.path === element.path || e.path.startsWith(`${element.path}.`);
    });

    if (newScopedElements.length > 1) {
      // It's a complex type inlined in the FHIR definition, so assign properties that way
      return assignProperties(yamlResource, yamlValue, newScopedElements, fhir);
    } else {
      // It's a complex type without its properties inlined, so look up the type and then assign properties
      const typeDef = fhir.find(typeCode);
      if (typeDef && typeDef.snapshot) {
        return assignProperties(yamlResource, yamlValue, typeDef.snapshot.element, fhir);
      }
    }
  }

  // The YAML input is a simple type, so attempt to assign it based on the FHIR type
  switch(typeCode) {
  // PRIMITIVES
  case 'boolean':
    return getBoolean(yamlValue);
  case 'integer':
  case 'unsignedInt':
  case 'positiveInt':
    return getInteger(yamlValue);
  case 'decimal':
    return getDecimal(yamlValue);
  case 'instant':
  case 'dateTime':
    return getDateTime(yamlValue);
  case 'date':
    return getDate(yamlValue);
  case 'time':
    return getTime(yamlValue);
  case 'string':
  case 'code':
  case 'id':
  case 'markdown':
  case 'uri':
  case 'canonical':
  case 'oid':
  case 'base64Binary':
    return getString(yamlValue);
  // SYNTAX-SUPPORTED COMPLEX TYPES
  case 'CodeableConcept':
    return getCodeableConcept(yamlValue);
  case 'Coding':
    return getCoding(yamlValue);
  case 'HumanName':
    return getHumanName(yamlValue, fhir.version);
  case 'Quantity':
    return getQuantity(yamlValue);
  case 'Period':
    return getPeriod(yamlValue);
  case 'Reference':
    return getReference(yamlValue);
  // ANYTHING ELSE
  default:
    // Usually this means a simple value was passed in for a complex type
    throw new Error(`Unsupported type: ${typeCode}`);
  }
}

/**
 * Returns back the id passed in or generates a UUIDv4 id if not was passed in
 * @param {string} id - the optional id to use
 * @returns {string} an id
 */
function getId(id) {
  return id ? id : uuidv4();
}

/**
 * Returns a reference object referring to the patient with the passed in id
 * @param {string} id - the patient id
 * @returns {object|undefined} a FHIR reference to the patient if id was passed in
 */
function getPatientReference(id) {
  if (id != null) {
    return getReference(`Patient/${id}`);
  }
}

/**
 * Returns a boolean corresponding to the passed in value.  If the passed in value is a string,
 * it will return true for 'true', false otherwise.
 * @param {boolean|string} bool - a boolean or string value for a boolean
 * @returns {boolean|undefined} the corresponding boolean
 */
function getBoolean(bool) {
  if (bool != null) {
    return typeof bool === 'boolean' ? bool : bool.toLowerCase() === 'true';
  }
}

/**
 * Returns an integer corresponding to the passed in value.  If the passed in value is a string,
 * it will parse it.
 * @param {Number|string} integer - an integer or string value for an integer
 * @returns {Number|undefined} the corresponding integer
 * @throws {Error} if the input is a non-integer or a string that can't be parsed to an integer
 */
function getInteger(integer) {
  if (integer != null) {
    const number = typeof integer === 'number' ? integer : parseInt(integer);
    if (Number.isInteger(number)) {
      return number;
    } else {
      throw new Error(`Invalid integer value: ${integer}`);
    }
  }
}

/**
 * Returns a decimal corresponding to the passed in value.  If the passed in value is a string,
 * it will parse it.
 * @param {Number|string} decimal - a decimal or string value for a decimal
 * @returns {Number|undefined} the corresponding decimal
 * @throws {Error} if the input is a non-decimal or a string that can't be parsed to a decimal
 */
function getDecimal(decimal) {
  if (decimal != null) {
    const number = typeof decimal === 'number' ? decimal : parseFloat(decimal);
    if (Number.isNaN(number)) {
      throw new Error(`Invalid decimal value: ${decimal}`);
    } else {
      return number;
    }
  }
}

/**
 * Returns a dateTime string corresponding to the passed in value.  If the passed in value is a Date,
 * it will return the corresponding ISO string.  If it is a string, it will return the string without
 * doing any validation.
 * @param {string|Date} date - a string or Date value
 * @returns {string|undefined} the corresponding dateTime as a string
 */
function getDateTime(date) {
  if (date != null) {
    // TODO: Check format?
    return typeof date === 'string' ? date : date.toISOString();
  }
}

/**
 * Returns a date string corresponding to the passed in value.  If the passed in value is a Date,
 * it will return the corresponding ISO string truncated to date only.  If it is a string, it will
 * return the string without doing any validation.
 * @param {string|Date} date - a string or Date value
 * @returns {string|undefined} the corresponding date as a string
 */
function getDate(date) {
  if (date != null) {
    // TODO: Check format?
    return typeof date === 'string' ? date : date.toISOString().slice(0, 10);
  }
}

/**
 * Returns a time string corresponding to the passed in value.  If the passed in value is a Date,
 * it will return the corresponding ISO string truncated to time only.  If it is a string, it will
 * return the string without doing any validation.
 * @param {string|Date} date - a string or Date value
 * @returns {string|undefined} the corresponding time as a string
 */
function getTime(time, defaultValue) {
  if (time != null) {
    // TODO: Check format?
    return typeof time === 'string' ? time : time.toISOString().slice(11);
  }
}

/**
 * Returns a string corresponding to the passed in value.  If the passed in value is not a string,
 * it will call toString() on it.
 * @param {*} str - a value to return as a string
 * @returns {string|undefined} the corresponding string
 */
function getString(str) {
  if (str != null) {
    return typeof str === 'string' ? str : str.toString();
  }
}

/**
 * Returns a CodeableConcept corresponding to the passed in string.  The string should have format:
 * SYSTEM#code Optional Display Text
 * The code will be the first Coding in the returned CodeableConcept and the display will be
 * re-used as the CodeableConcept text as well.
 * @param {string} code - the string code representation
 * @returns {object} the CodeableConcept
 */
function getCodeableConcept(code) {
  if (code != null) {
    const coding = getCoding(code);
    if (coding.code != null) {
      return {
        coding: [coding],
        text: coding.display
      };
    } else {
      return {
        text: coding.display
      };
    }
  }
}

/**
 * Returns a Coding corresponding to the passed in string.  The string should have format:
 * SYSTEM#code Optional Display Text
 * @param {string} code - the string code representation
 * @returns {object|undefined} the corresponding Coding
 */
function getCoding(code) {
  if (code != null) {
    const matches = /^((\S+)?\s*#\s*([^#\s]+))?\s*(.*)?$/.exec(code);
    if (matches) {
      const coding = {
        system: matches[2] != '' ? matches[2] : null,
        code: matches[3] != '' ? matches[3] : null,
        display: matches[4] != '' ? matches[4] : null,
      };
      if (coding.system) {
        switch (coding.system.toUpperCase()) {
        case 'SNOMED': case 'SNOMEDCT': case 'SNOMED-CT': case 'SCT': coding.system = 'http://snomed.info/sct'; break;
        case 'LOINC': coding.system = 'http://loinc.org'; break;
        case 'RXNORM': case 'RXN': case 'RX': coding.system = 'http://www.nlm.nih.gov/research/umls/rxnorm'; break;
        case 'UCUM': coding.system = 'http://unitsofmeasure.org'; break;
        case 'CPT': coding.system = 'http://www.ama-assn.org/go/cpt'; break;
        case 'CVX': coding.system = 'http://hl7.org/fhir/sid/cvx'; break;
        case 'ICD-10': case 'ICD10': coding.system = 'http://hl7.org/fhir/sid/icd-10'; break;
        case 'ICD-10-CM': case 'ICD10CM': coding.system = 'http://hl7.org/fhir/sid/icd-10-cm'; break;
        case 'ICD-10-PCS': case 'ICD10PCS': coding.system = 'http://www.icd10data.com/icd10pcs'; break;
        case 'ICD-9': case 'ICD9': case 'ICD-9-CM': case 'ICD9CM': coding.system = 'http://hl7.org/fhir/sid/icd-9-cm'; break;
        // Keep ICD-9 Diagnosis/Procedure aliases for backwards compatibility, but resolve to standard ICD-9 URL
        case 'ICD-9-D': case 'ICD9D': case 'ICD-9-CM-D': case 'ICD9CMD': coding.system = 'http://hl7.org/fhir/sid/icd-9-cm'; break;
        case 'ICD-9-P': case 'ICD9P': case 'ICD-9-CM-P': case 'ICD9CMP': coding.system = 'http://hl7.org/fhir/sid/icd-9-cm'; break;
        case 'OBS-CAT': case 'OBSCAT': coding.system = 'http://hl7.org/fhir/observation-category'; break;
        case 'V3-ROLE-CODE': coding.system = 'http://hl7.org/fhir/v3/RoleCode'; break;
        case 'V3-RACE': coding.system = 'http://hl7.org/fhir/v3/Race'; break;
        case 'V3-ETHNICITY': coding.system = 'http://hl7.org/fhir/v3/Ethnicity'; break;
        }
        if (coding.system.indexOf('://') === -1 && !coding.system.startsWith('urn:')) {
          console.warn(`Unrecognized code system: ${coding.system}`);
        }
      }
      return coding;
    }
    throw new Error(`Couldn't parse code: ${code}`);
  }
}

/**
 * Returns a HumanName corresponding to the passed in string.  If only one word is provided,
 * it is assumed to be the first name.  If more than one word is provided, only the last word
 * is considered to be the last name.
 * @param {string} name - the name
 * @param {string} release - the FHIR release (dstu2, stu3, or r4)
 * @returns {object|undefined} the corresponding HumanName
 */
function getHumanName(name, release) {
  if (name != null) {
    const humanName = {};
    const parts = name.split(/\s+/);
    if (parts.length > 0) {
      humanName.given = parts.slice(0, -1);
    }
    if (parts.length > 1) {
      if (release === 'dstu2') {
        humanName.family = parts.slice(parts.length - 1);
      } else {
        humanName.family = parts[parts.length - 1];
      }
    }
    return humanName;
  }
}

/**
 * Returns a Quantity corresponding to the passed in string.  The string format should be:
 * NumericValue UcumUnit
 * @param {string} quantity - the string-based quantity representation
 * @returns {object|undefined} the corresponding Quantity
 */
function getQuantity(quantity) {
  if (quantity !== undefined) {
    const matches = /(\d+(\.\d+)?)(\s+(.+))?/.exec(quantity);
    if (matches) {
      const quantityObject = {
        value: parseFloat(matches[1])
      };
      if (matches[4] != null && matches[4] !== '') {
        quantityObject.unit = matches[4];
        quantityObject.system = 'http://unitsofmeasure.org';
        quantityObject.code = matches[4];
      }
      return quantityObject;
    }
    throw new Error(`Couldn't parse quantity: ${quantity}`);
  }
}

/**
 * Returns a Period corresponding to the passed in string.  The string format should be:
 * FirstDate - SecondDate
 * If only a single date is provided, a period will be returned with just the start date.
 * @param {string} period - the string-based period representation
 * @returns {object|undefined} the corresponding Period
 */
function getPeriod(period) {
  if (period) {
    if (Object.prototype.toString.call(period) === '[object Date]') {
      return {
        start: getDateTime(period)
      };
    } else {
      const [start, end] = period.split(/\s+-\s+/);
      const periodObject = {
        start: getDateTime(start)
      };
      if (end) {
        periodObject.end = getDateTime(end);
      }
      return periodObject;
    }
  }
}

/**
 * Returns a reference object containing the passed in reference.
 * @param {string} ref - the reference id, type/id, or url
 * @returns {object|undefined} the corresponding Reference
 */
function getReference(ref) {
  if (ref != null) {
    return { reference: `${ref}` }; // forces it to a string
  }
}

module.exports = yaml2fhir;