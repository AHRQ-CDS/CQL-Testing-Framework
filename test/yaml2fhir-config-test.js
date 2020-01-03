const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');
const {expect} = require('chai');
const load = require('../src/fhir/load');

describe('#yaml2fhir-config', () => {
  describe('#dstu2', () => {
    let fhir;
    let config;
    before(() => {
      fhir = load('dstu2');
      config = yaml.safeLoad(fs.readFileSync(path.join(__dirname, '..', 'src', 'fhir', 'dstu2', 'config.yaml'), 'utf-8'));
    });

    it('should be configured with valid resources, patient fields, and defaults', () => {
      Object.keys(config.resources).forEach(name => {
        // First ensure it is a valid FHIR DSTU2 resource name
        const sd = fhir.findResource(name);
        expect(sd, `Invalid resource name: ${name}`).to.exist;
        // Then ensure that the specified patient field exists and is a reference to patient
        const resourceCfg = config.resources[name] || {};
        if (resourceCfg.patient) {
          const ptPath = `${name}.${resourceCfg.patient}`;
          const ptElement = sd.snapshot.element.find(e => e.path === ptPath);
          expect(ptElement, `Invalid patient field: ${ptPath}`).to.exist;
          const isPtRef = ptElement.type.some(t =>
            t.code === 'Reference' && t.profile && t.profile.some(p =>
              p === 'http://hl7.org/fhir/StructureDefinition/Patient' || p === 'http://hl7.org/fhir/StructureDefinition/Resource'
            )
          );
          expect(isPtRef, `${ptPath} is not a reference to a Patient`).to.be.true;
        }
        // Then ensure all defaults specify valid fields
        if (resourceCfg.defaults) {
          Object.keys(resourceCfg.defaults).forEach(fieldName => {
            const fieldPath = `${name}.${fieldName}`;
            const fieldElement = sd.snapshot.element.find(e => e.path === fieldPath);
            expect(fieldElement, `Invalid field in defaults: ${fieldPath}`).to.exist;
          });
        }
      });
    });


  });
});
