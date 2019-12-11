const uuidv4 = require('uuid/v4');
const load = require('./fhir/load');

function yaml2fhir(yamlObject, patientId, fhirVersion) {
  const fhir = load(fhirVersion);
  if (fhir == null) {
    throw new Error(`Unsupported version of FHIR: ${fhirVersion}`);
  }
  let input = yamlObject;
  if (input.resourceType == null) {
    throw new Error('Each data object must specify its "resourceType"');
  }
  const sd = fhir.findResource(input.resourceType);
  if (sd == null) {
    throw new Error(`Unsupported resourceType: ${input.resourceType}`);
  }
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

  // Loop through the input assigning into the result as appropriate
  for (const key of Object.keys(input)) {
    if (key === 'resourceType') {
      continue;
    }
    const element = sd.snapshot.element.find(e => e.path === `${sd.id}.${key}`);
    if (element == null) {
      throw new Error(`${sd.id} does not contain the property: ${key}`);
    }
    result[key] = getValue(input[key], element, fhirVersion);
  }

  return result;
}

function getValue(yamlValue, element, fhirVersion, skipCardCheck = false) {
  if (yamlValue == null) {
    return yamlValue;
  }
  let type = element.type && element.type.length === 1 ? element.type[0] : undefined;
  if (!skipCardCheck) {
    if (element.max === '0') {
      // Currently not supported
      throw new Error(`Cannot set ${element.path} because its max is 0`);
    }
    if (element.max !== '1') {
      // This is expecting an array -- if input is not an array, force it into an array
      const yamlValueArray = Array.isArray(yamlValue) ? yamlValue : [yamlValue];
      return yamlValueArray.map(v => getValue(v, element, fhirVersion, true));
    }
    if (Array.isArray(yamlValue)) {
      // Input is an array, but the element is not
      throw new Error(`${element.path} does not allow multiple values`);
    }
  }
  switch(type.code) {
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
  case 'oid':
  case 'base64Binary':
    return getString(yamlValue);
  // SYNTAX-SUPPORTED COMPLEX TYPES
  case 'Annotation':
    return getAnnotation(yamlValue);
  case 'CodeableConcept':
    return getCodeableConcept(yamlValue);
  case 'Coding':
    return getCoding(yamlValue);
  case 'HumanName':
    return getHumanName(yamlValue, fhirVersion);
  case 'Quantity':
    return getQuantity(yamlValue);
  case 'Period':
    return getPeriod(yamlValue);
  // COMPLEX TYPES WITH NO SPECIAL SYNTAX
  case 'Address':
  case 'Attachment':
  case 'BackboneElement':
  case 'ContactPoint':
  case 'Element':
  case 'Identifier':
  case 'Range':
  case 'Ratio':
  case 'Repeat':
  case 'SampledData':
  case 'Signature':
  case 'Timing':
  default:
    // Currently not supported
    throw new Error(`Unsupported type: ${type.code}`);
  }
}

function getId(id) {
  return id ? id : uuidv4();
}

function getPatientReference(id) {
  if (id != null) {
    return { reference: `Patient/${id}` };
  }
}

function getBoolean(bool) {
  if (bool != null) {
    return typeof bool === 'boolean' ? bool : bool.toLowerCase() === 'true';
  }
}

function getInteger(integer) {
  if (integer != null) {
    return typeof integer === 'number' ? integer : parseInt(integer);
  }
}

function getDecimal(decimal) {
  if (decimal != null) {
    return typeof decimal === 'number' ? decimal : parseFloat(decimal);
  }
}

function getDateTime(date) {
  if (date != null) {
    // TODO: Check format?
    return typeof date === 'string' ? date : date.toISOString();
  }
}

function getDate(date) {
  if (date != null) {
    // TODO: Check format?
    return typeof date === 'string' ? date : date.toISOString().slice(0, 10);
  }
}

function getTime(time, defaultValue) {
  if (time != null) {
    // TODO: Check format?
    return typeof time === 'string' ? time : time.toISOString().slice(11);
  }
}

function getString(str, defaultValue) {
  if (str != null) {
    return typeof str === 'string' ? str : str.toString();
  }
  return defaultValue;
}

function getAnnotation(ann) {
  if (ann != null) {
    return {
      authorString: getString(ann.author),
      time: getDateTime(ann.time),
      text: getString(ann.text, '')
    };
  }
}

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
        case 'ICD-9-D': case 'ICD9D': case 'ICD-9-CM-D': case 'ICD9CMD': coding.system = 'http://hl7.org/fhir/sid/icd-9-cm/diagnosis'; break;
        case 'ICD-9-P': case 'ICD9P': case 'ICD-9-CM-P': case 'ICD9CMP': coding.system = 'http://hl7.org/fhir/sid/icd-9-cm/procedure'; break;
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

function getHumanName(name, fhirVersion) {
  if (name != null) {
    const humanName = {};
    const parts = name.split(/\s+/);
    if (parts.length > 0) {
      humanName.given = parts.slice(0, -1);
    }
    if (parts.length > 1) {
      if (fhirVersion === 'dstu2') {
        humanName.family = parts.slice(parts.length - 1);
      } else {
        humanName.family = parts[parts.length - 1];
      }
    }
    return humanName;
  }
}

function getQuantity(quantity) {
  if (quantity !== undefined) {
    const matches = /(\d+(\.\d+)?)(\s+(.+))?/.exec(quantity);
    if (matches) {
      const quantityObject = {
        value: parseFloat(matches[1])
      };
      if (matches.length === 5) {
        quantityObject.unit = matches[4];
      }
      return quantityObject;
    }
    throw new Error(`Couldn't parse quantity: ${quantity}`);
  }
}

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

module.exports = yaml2fhir;