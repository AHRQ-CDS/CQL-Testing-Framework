const yaml = require('js-yaml');
const fs   = require('fs');
const uuidv4 = require('uuid/v4');

function yamlToTestCase(yamlFilePath) {
  // Get document, or throw exception on error
  const doc = yaml.safeLoad(fs.readFileSync(yamlFilePath, 'utf8'));
  if (!doc.name) {
    throw new Error(`Every test case must specify its 'name'`);
  }
  const testName = doc.name;
  if (doc.skip) {
    return {
      name: testName,
      skip: true
    };
  }

  // Handle the data

  const bundle = {
    resourceType: 'Bundle',
    id: testName,
    type: 'collection',
    entry: []
  };
  const addResource = (resource) => bundle.entry.push({ resource });

  if (!doc.data) {
    console.warn(`${testName}: No data elements found.`);
    doc.data = [];
  }

  // Handle the patient
  if (doc.data.length === 0 || doc.data[0].resourceType !== 'Patient') {
    console.warn(`${testName}: First element was not a patient.  Inserting a patient element.`);
    doc.data = doc.data.unshift({ resourceType: 'Patient' });
  }
  const p = handlePatient(doc.data[0]);
  addResource(p);

  for (let i = 1; i < doc.data.length; i++) {
    const d = doc.data[i];
    if (!d.resourceType) {
      throw new Error(`${testName}: Every data element must specify its 'resourceType'`);
    }
    switch (d.resourceType) {
    case 'Condition': addResource(handleCondition(d, p)); break;
    case 'Encounter': addResource(handleEncounter(d, p)); break;
    case 'MedicationOrder': addResource(handleMedicationOrder(d, p)); break;
    case 'MedicationStatement': addResource(handleMedicationStatement(d, p)); break;
    case 'Observation': addResource(handleObservation(d, p)); break;
    case 'Procedure': addResource(handleProcedure(d, p)); break;
    default:
      throw new Error(`${testName}: Unsupported resourceType '${d.resourceType}'`);
    }
  }

  if (doc.results == null) {
    console.warn(`${testName}: No results specified.`);
    doc.results = {};
  }

  return {
    name: testName,
    skip: false,
    only: doc.only != null ? doc.only : false,
    bundle,
    results: doc.results
  };
}

function handlePatient(d) {
  return {
    resourceType: 'Patient',
    id: getId(d.id),
    name: getName(d.name),
    gender: d.gender,
    birthDate: getDate(d.birthDate)
  };
}

function handleCondition(d, p) {
  return {
    resourceType: 'Condition',
    id: getId(d.id),
    patient: getPatientReference(p.id),
    code: getCodeableConcept(d.code),
    clinicalStatus: getString(d.clinicalStatus, d.abatementDateTime ? 'resolved': 'active'),
    verificationStatus: getString(d.verificationStatus, 'confirmed'),
    onsetDateTime: getDateTime(d.onsetDateTime),
    dateRecorded: getDate(d.dateRecorded),
    abatementDateTime: getDateTime(d.abatementDateTime)
  };
}

function handleEncounter(d, p) {
  return {
    resourceType: 'Encounter',
    id: getId(d.id),
    status: getString(d.status, 'finished'),
    class: getString(d.class),
    type: getCodeableConcept(d.type),
    patient: getPatientReference(p.id),
    reason: getCodeableConceptArray(d.reason),
    period: getPeriod(d.period)
  };
}

function handleMedicationOrder(d, p) {
  return {
    resourceType: 'MedicationOrder',
    id: getId(d.id),
    dateWritten: getDateTime(d.dateWritten),
    status: getString(d.status, 'active'),
    dateEnded: getDateTime(d.dateEnded),
    patient: getPatientReference(p.id),
    medicationCodeableConcept: getCodeableConcept(d.code)
  };
}

function handleMedicationStatement(d, p) {
  return {
    resourceType: 'MedicationStatement',
    id: getId(d.id),
    patient: getPatientReference(p.id),
    dateAsserted: getDateTime(d.dateAsserted),
    status: getString(d.status, 'active'),
    wasNotTaken: getBoolean(d.wasNotTaken, false),
    effectiveDateTime: d.effectiveDateTime ? getDateTime(d.effectiveDateTime) : undefined,
    effectivePeriod: d.effectivePeriod ? getPeriod(d.effectivePeriod) : undefined,
    medicationCodeableConcept: getCodeableConcept(d.code)
  };
}

function handleObservation(d, p) {
  return {
    resourceType: 'Observation',
    id: getId(d.id),
    status: getString(d.status, 'final'),
    category: getCodeableConcept(d.category),
    code: getCodeableConcept(d.code),
    subject: getPatientReference(p.id),
    effectiveDateTime: getDateTime(d.effectiveDateTime),
    issued: getDateTime(d.issued),
    // TODO: Support other value types
    valueCodeableConcept: getCodeableConcept(d.valueCodeableConcept),
    valueQuantity: getQuantity(d.valueQuantity),
    valueString: d.valueString,
    interpretation: getCodeableConcept(d.interpretation),
    method: getCodeableConcept(d.method),
    component: getObservationComponents(d.component)
  };
}

function handleProcedure(d, p) {
  return {
    resourceType: 'Procedure',
    id: getId(d.id),
    subject: getPatientReference(p.id),
    status: getString(d.status, 'completed'),
    category: getCodeableConcept(d.category),
    code: getCodeableConcept(d.code),
    notPerformed: getBoolean(d.notPerformed, false),
    performedDateTime: d.performedDateTime ? getDateTime(d.performedDateTime) : undefined,
    performedPeriod: d.performedPeriod ? getPeriod(d.performedPeriod) : undefined,
    outcome: getCodeableConcept(d.outcome)
  };
}

function getId(id) {
  return id ? id : uuidv4();
}

function getName(name) {
  if (name) {
    const humanName = {};
    const parts = name.split(/\s+/);
    if (parts.length > 0) {
      humanName.given = parts.slice(0, -1);
    }
    if (parts.length > 1) {
      humanName.family = parts.slice(parts.length - 1);
    }
    return [humanName];
  }
}

function getPatientReference(id) {
  return id ? { reference: `Patient/${id}` } : undefined;
}

function getDate(date, defaultValue) {
  if (date) {
    if (typeof date === 'string') {
      // TODO: Check format?
      return date;
    }
    return date.toISOString().slice(0, 10);
  }
  return defaultValue;
}

function getDateTime(date, defaultValue) {
  if (date) {
    if (typeof date === 'string') {
      // TODO: Check format?
      return date;
    }
    return date.toISOString();
  }
  return defaultValue;
}

function getString(str, defaultValue) {
  return str != null ? str : defaultValue;
}

function getBoolean(bool, defaultValue) {
  return bool != null ? bool : defaultValue;
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

function getCodeableConceptArray(codes) {
  if (codes) {
    return codes.map(c => getCodeableConcept(c));
  }
}

function getCodeableConcept(code) {
  if (code) {
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
  if (code) {
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
        case 'ICD-9': case 'ICD9': case 'ICD-9-CM': coding.system = 'http://hl7.org/fhir/sid/icd-9-cm'; break;
        case 'OBS-CAT': case 'OBSCAT': coding.system = 'http://hl7.org/fhir/observation-category'; break;
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

function getObservationComponents(components) {
  if (components) {
    return components.map(c => {
      return {
        code: getCodeableConcept(c.code),
        // TODO: Support other value types
        valueCodeableConcept: getCodeableConcept(c.valueCodeableConcept),
        valueQuantity: getQuantity(c.valueQuantity)
      };
    });
  }
}

module.exports = yamlToTestCase;