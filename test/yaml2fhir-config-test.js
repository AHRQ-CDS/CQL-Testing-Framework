const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');
const {expect} = require('chai');
const _ = require('lodash');
const load = require('../src/fhir/load');

describe('#yaml2fhir-config', () => {
  describe('#dstu2', () => {
    it('should be configured with valid resources, patient fields, and defaults', () => {
      assertValidConfig(
        yaml.load(fs.readFileSync(path.join(__dirname, '..', 'src', 'fhir', 'dstu2', 'config.yaml'), 'utf-8')),
        load('dstu2')
      );
    });
  });

  describe('#stu3', () => {
    it('should be configured with valid resources, patient fields, and defaults', () => {
      assertValidConfig(
        yaml.load(fs.readFileSync(path.join(__dirname, '..', 'src', 'fhir', 'stu3', 'config.yaml'), 'utf-8')),
        load('stu3')
      );
    });
  });

  describe('#r4', () => {
    it('should be configured with valid resources, patient fields, and defaults', () => {
      assertValidConfig(
        yaml.load(fs.readFileSync(path.join(__dirname, '..', 'src', 'fhir', 'r4', 'config.yaml'), 'utf-8')),
        load('r4')
      );
    });
  });
});

function assertValidConfig(config, fhir) {
  // Ensure the top-level of the config contains only a resources key
  const invalidTopLevelKeys = Object.keys(config).filter(k => k !== 'resources');
  expect(invalidTopLevelKeys, `Config contains invalid top-level keys: ${invalidTopLevelKeys.join(', ')}`).to.be.empty;

  // Check all the resources in the config
  Object.keys(config.resources).forEach(name => {
    // First ensure it is a valid FHIR resource name
    const sd = fhir.findResource(name);
    expect(sd, `Invalid resource name: ${name}`).to.exist;
    // Then ensure that the specified patient field exists and is a reference to patient
    const resourceCfg = config.resources[name] || {};
    if (resourceCfg.patient) {
      const ptElement = getAndAssertElement(sd, resourceCfg.patient);
      let isPtRef;
      switch (fhir.version) {
      case 'dstu2':
        isPtRef = ptElement.type.some(t =>
          t.code === 'Reference' && t.profile && t.profile.some(p =>
            p === 'http://hl7.org/fhir/StructureDefinition/Patient' || p === 'http://hl7.org/fhir/StructureDefinition/Resource'
          )
        );
        break;
      case 'stu3':
        isPtRef = ptElement.type.some(t =>
          t.code === 'Reference' && (
            t.targetProfile === 'http://hl7.org/fhir/StructureDefinition/Patient' ||
            t.targetProfile === 'http://hl7.org/fhir/StructureDefinition/Resource'
          )
        );
        break;
      case 'r4':
      default:
        isPtRef = ptElement.type.some(t =>
          t.code === 'Reference' && t.targetProfile && t.targetProfile.some(p =>
            p === 'http://hl7.org/fhir/StructureDefinition/Patient' || p === 'http://hl7.org/fhir/StructureDefinition/Resource'
          )
        );
        break;
      }
      expect(isPtRef, `${name} config specifies patient field that is not a reference to a Patient: ${resourceCfg.patient}`).to.be.true;
    }
    // Then ensure all defaults specify valid fields
    if (resourceCfg.defaults) {
      Object.keys(resourceCfg.defaults).forEach(fieldName => {
        getAndAssertElement(sd, fieldName);
      });
    }
    // Then ensure all the aliases specify valid fields
    if (resourceCfg.aliases) {
      Object.keys(resourceCfg.aliases).forEach(fieldName => {
        getAndAssertElement(sd, resourceCfg.aliases[fieldName]);
      });
    }
    // Then ensure the config doesn't contain any unknown keys
    const invalidKeys = Object.keys(resourceCfg).filter(k => !['patient', 'defaults', 'aliases', 'doc'].includes(k));
    expect(invalidKeys, `${name} config contains invalid keys: ${invalidKeys.join(', ')}`).to.be.empty;
    // Then ensure the doc fields are valid
    if (resourceCfg.doc) {
      const invalidDocKeys = Object.keys(resourceCfg.doc).filter(k => k !== 'status');
      expect(invalidDocKeys, `${name} config contains invalid doc keys: ${invalidDocKeys.join(', ')}`).to.be.empty;
      const validStatus = resourceCfg.doc.status == null || ['common', 'rare'].includes(resourceCfg.doc.status);
      expect(validStatus, `${name} config contains invalid doc.status value: ${resourceCfg.doc.status}`).to.be.true;
    }
  });

  // Then check to ensure no resources are missing from the config
  fhir.getResourceNames().forEach(name => {
    expect(config.resources[name], `Config does not specify resource: ${name}`).to.not.be.undefined;
  });
}

function getAndAssertElement(sd, name) {
  const element = sd.snapshot.element.find(e => {
    const targetPath = `${sd.id}.${name}`;
    if (e.path === targetPath) {
      return true;
    }
    // Handle the case of choices (e.g., medicationCodeableConcept should match on path medication[x])
    if (e.path.endsWith('[x]')) {
      return e.type.some(t => e.path.replace(/\[x]$/, _.upperFirst(t.code)) === targetPath);
    }
    return false;
  });
  expect(element, `${sd.id} config refers to an invalid field: ${name}`).to.exist;
  return element;
}
