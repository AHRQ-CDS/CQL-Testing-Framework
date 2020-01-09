const yaml = require('js-yaml');
const {expect} = require('chai');
const yaml2fhir = require('../src/yaml2fhir');

describe('#yaml2fhir', () => {
  describe('#dstu2', () => {
    it('should convert a simple blank Patient', () => {
      const data = yaml.safeLoad(`
        resourceType: Patient
      `);
      const result = yaml2fhir(data, null, 'dstu2');
      idFriendlyExpectEqual(result, {
        resourceType: 'Patient',
        id: 'assigned'
      });
    });

    it('should convert a simple blank Patient with supplied patientId', () => {
      const data = yaml.safeLoad(`
        resourceType: Patient
      `);
      const result = yaml2fhir(data, '123', 'dstu2');
      expect(result).to.eql({
        resourceType: 'Patient',
        id: '123'
      });
    });

    it('should convert a simple blank Encounter with proper defaults and reference to Patient', () => {
      const data = yaml.safeLoad(`
        resourceType: Encounter
      `);
      const result = yaml2fhir(data, '123', 'dstu2');
      idFriendlyExpectEqual(result, {
        resourceType: 'Encounter',
        patient: { reference: 'Patient/123'},
        status: 'finished'
      });
    });

    it('should convert a Condition whose config uses $if-present/$then/$else when target property is present', () => {
      const data = yaml.safeLoad(`
        resourceType: Condition
        abatementDateTime: 2000-12-15
      `);
      const result = yaml2fhir(data, '123', 'dstu2');
      idFriendlyExpectEqual(result, {
        resourceType: 'Condition',
        patient: { reference: 'Patient/123'},
        abatementDateTime: '2000-12-15T00:00:00.000Z',
        clinicalStatus: 'resolved',
        verificationStatus: 'confirmed'
      });
    });

    it('should convert a Condition whose config uses $if-present/$then/$else when target property is not present', () => {
      const data = yaml.safeLoad(`
        resourceType: Condition
      `);
      const result = yaml2fhir(data, '123', 'dstu2');
      idFriendlyExpectEqual(result, {
        resourceType: 'Condition',
        patient: { reference: 'Patient/123'},
        clinicalStatus: 'active',
        verificationStatus: 'confirmed'
      });
    });

    it('should convert a Patient with top-level properties', () => {
      const data = yaml.safeLoad(`
        resourceType: Patient
        active: true
        name: [Bobby Jones]
        gender: male
        birthDate: 2000-11-30
        maritalStatus: http://hl7.org/fhir/marital-status#U Unmarried
      `);
      const result = yaml2fhir(data, '123', 'dstu2');
      expect(result).to.eql({
        resourceType: 'Patient',
        id: '123',
        active: true,
        name: [{
          family: ['Jones'],
          given: ['Bobby']
        }],
        gender: 'male',
        birthDate: '2000-11-30',
        maritalStatus: {
          coding: [{
            system: 'http://hl7.org/fhir/marital-status',
            code: 'U',
            display: 'Unmarried'
          }],
          text: 'Unmarried'
        }
      });
    });

    it('should convert a non-array value to an array when necessary', () => {
      const data = yaml.safeLoad(`
        resourceType: Patient
        name: Bobby Jones
      `);
      const result = yaml2fhir(data, '123', 'dstu2');
      expect(result).to.eql({
        resourceType: 'Patient',
        id: '123',
        name: [{
          family: ['Jones'],
          given: ['Bobby']
        }]
      });
    });


    it('should convert an Observation with top-level properties', () => {
      const data = yaml.safeLoad(`
        resourceType: Observation
        id: 456
        status: amended
        code: LOINC#12345-6 Fake LOINC Code
        issued: 2018-10-10
        comments: My Comments
      `);
      const result = yaml2fhir(data, '123', 'dstu2');
      expect(result).to.eql({
        resourceType: 'Observation',
        id: '456',
        subject: { reference: 'Patient/123'},
        status: 'amended',
        code: {
          coding: [{
            system: 'http://loinc.org',
            code: '12345-6',
            display: 'Fake LOINC Code'
          }],
          text: 'Fake LOINC Code'
        },
        issued: '2018-10-10T00:00:00.000Z',
        comments: 'My Comments'
      });
    });

    it('should support choice properties like value[x]', () => {
      const data = yaml.safeLoad(`
        resourceType: Observation
        id: 456
        status: final
        code: LOINC#12345-6 Fake LOINC Code
        valueQuantity: 25 mg
      `);
      const result = yaml2fhir(data, '123', 'dstu2');
      expect(result).to.eql({
        resourceType: 'Observation',
        id: '456',
        subject: { reference: 'Patient/123'},
        status: 'final',
        code: {
          coding: [{
            system: 'http://loinc.org',
            code: '12345-6',
            display: 'Fake LOINC Code'
          }],
          text: 'Fake LOINC Code'
        },
        valueQuantity: {
          value: 25,
          unit: 'mg',
          system: 'http://unitsofmeasure.org',
          code: 'mg'
        }
      });
    });

    it('should support references', () => {
      const data = yaml.safeLoad(`
        resourceType: Observation
        id: 456
        status: final
        code: LOINC#12345-6 Fake LOINC Code
        encounter: 123
        performer: [http://example.org/fhir/Practitioner/456]
        device: Device/789
        valueQuantity: 25 mg
      `);
      const result = yaml2fhir(data, '123', 'dstu2');
      expect(result).to.eql({
        resourceType: 'Observation',
        id: '456',
        subject: { reference: 'Patient/123'},
        status: 'final',
        code: {
          coding: [{
            system: 'http://loinc.org',
            code: '12345-6',
            display: 'Fake LOINC Code'
          }],
          text: 'Fake LOINC Code'
        },
        encounter: { reference: '123' },
        performer: [{ reference: 'http://example.org/fhir/Practitioner/456' }],
        device: { reference: 'Device/789' },
        valueQuantity: {
          value: 25,
          unit: 'mg',
          system: 'http://unitsofmeasure.org',
          code: 'mg'
        }
      });
    });

    it('should support nested properties for Backbone elements', () => {
      const data = yaml.safeLoad(`
        resourceType: Patient
        name: Rover Pupford
        animal:
          species: http://hl7.org/fhir/animal-species#canislf Dog
      `);
      const result = yaml2fhir(data, '123', 'dstu2');
      expect(result).to.eql({
        resourceType: 'Patient',
        id: '123',
        name: [{
          family: ['Pupford'],
          given: ['Rover']
        }],
        animal: {
          species: {
            coding: [{
              system: 'http://hl7.org/fhir/animal-species',
              code: 'canislf',
              display: 'Dog'
            }],
            text: 'Dog'
          }
        }
      });
    });

    it('should support nested properties for complex type elements', () => {
      const data = yaml.safeLoad(`
        resourceType: Observation
        id: 456
        status: final
        code:
          text: Some Lab That Is Not Coded
        valueQuantity: 25 mg
      `);
      const result = yaml2fhir(data, '123', 'dstu2');
      expect(result).to.eql({
        resourceType: 'Observation',
        id: '456',
        subject: { reference: 'Patient/123'},
        status: 'final',
        code: {
          text: 'Some Lab That Is Not Coded'
        },
        valueQuantity: {
          value: 25,
          unit: 'mg',
          system: 'http://unitsofmeasure.org',
          code: 'mg'
        }
      });
    });

    it('should support nested properties for repeating Backbone elements', () => {
      const data = yaml.safeLoad(`
        resourceType: Observation
        id: 456
        status: final
        code: LOINC#12345-6 Fake LOINC Code
        component:
        -
          code: LOINC#ABCDE-1 Fake LOINC Compnent 1 Code
          valueQuantity: 10
        -
          code: LOINC#ABCDE-2 Fake LOINC Compnent 2 Code
          valueQuantity: 20
        -
          code: LOINC#ABCDE-3 Fake LOINC Compnent 3 Code
          valueQuantity: 30
      `);
      const result = yaml2fhir(data, '123', 'dstu2');
      expect(result).to.eql({
        resourceType: 'Observation',
        id: '456',
        subject: { reference: 'Patient/123'},
        status: 'final',
        code: {
          coding: [{
            system: 'http://loinc.org',
            code: '12345-6',
            display: 'Fake LOINC Code'
          }],
          text: 'Fake LOINC Code'
        },
        component: [{
          code: {
            coding: [{
              system: 'http://loinc.org',
              code: 'ABCDE-1',
              display: 'Fake LOINC Compnent 1 Code'
            }],
            text: 'Fake LOINC Compnent 1 Code'
          },
          valueQuantity: {
            value: 10
          }
        },
        {
          code: {
            coding: [{
              system: 'http://loinc.org',
              code: 'ABCDE-2',
              display: 'Fake LOINC Compnent 2 Code'
            }],
            text: 'Fake LOINC Compnent 2 Code'
          },
          valueQuantity: {
            value: 20
          }
        },
        {
          code: {
            coding: [{
              system: 'http://loinc.org',
              code: 'ABCDE-3',
              display: 'Fake LOINC Compnent 3 Code'
            }],
            text: 'Fake LOINC Compnent 3 Code'
          },
          valueQuantity: {
            value: 30
          }
        }]
      });
    });

    it('should throw an error for an unsupported version of FHIR', () => {
      const data = yaml.safeLoad(`
        resourceType: Patient
      `);
      expect(() => yaml2fhir(data, '123', 'r5')).to.throw('Unsupported version of FHIR: r5');
    });

    it('should throw an error if the data does not declare its resourceType', () => {
      const data = yaml.safeLoad(`
        id: abc
      `);
      expect(() => yaml2fhir(data, '123', 'dstu2')).to.throw('Each data object must specify its "resourceType"');
    });

    it('should throw an error for an unsupported FHIR resource type', () => {
      const data = yaml.safeLoad(`
        resourceType: MedicationRequest
      `);
      // Note: MedicationRequests is not in DSTU2 (it is called MedicationOrder in DSTU2)
      expect(() => yaml2fhir(data, '123', 'dstu2')).to.throw('Unsupported resourceType: MedicationRequest');
    });

    it('should throw an error for an invalid property', () => {
      const data = yaml.safeLoad(`
        resourceType: Procedure
        notDone: true
      `);
      // Note: Procedure.notDone is not in DSTU2 (it is "notPerformed" in DSTU2)
      expect(() => yaml2fhir(data, '123', 'dstu2')).to.throw('Path not found: Procedure.notDone');
    });

    it('should throw an error when an array is provided for a non array property', () => {
      const data = yaml.safeLoad(`
        resourceType: Encounter
        status: [planned, finished]
      `);
      // Note: Encounter.status is 1..1 (not an array)
      expect(() => yaml2fhir(data, '123', 'dstu2')).to.throw('Encounter.status does not allow multiple values');
    });
  });

  describe('#stu3', () => {
    it('should convert a simple blank Patient', () => {
      const data = yaml.safeLoad(`
        resourceType: Patient
      `);
      const result = yaml2fhir(data, null, 'stu3');
      idFriendlyExpectEqual(result, {
        resourceType: 'Patient',
        id: 'assigned'
      });
    });

    it('should convert a simple blank Patient with supplied patientId', () => {
      const data = yaml.safeLoad(`
        resourceType: Patient
      `);
      const result = yaml2fhir(data, '123', 'stu3');
      expect(result).to.eql({
        resourceType: 'Patient',
        id: '123'
      });
    });

    it('should convert a simple blank Encounter with proper defaults and reference to Patient', () => {
      const data = yaml.safeLoad(`
        resourceType: Encounter
      `);
      const result = yaml2fhir(data, '123', 'stu3');
      idFriendlyExpectEqual(result, {
        resourceType: 'Encounter',
        subject: { reference: 'Patient/123'},
        status: 'finished'
      });
    });

    it('should convert a Condition whose config uses $if-present/$then/$else when target property is present', () => {
      const data = yaml.safeLoad(`
        resourceType: Condition
        abatementDateTime: 2000-12-15
      `);
      const result = yaml2fhir(data, '123', 'stu3');
      idFriendlyExpectEqual(result, {
        resourceType: 'Condition',
        subject: { reference: 'Patient/123'},
        abatementDateTime: '2000-12-15T00:00:00.000Z',
        clinicalStatus: 'resolved',
        verificationStatus: 'confirmed'
      });
    });

    it('should convert a Condition whose config uses $if-present/$then/$else when target property is not present', () => {
      const data = yaml.safeLoad(`
        resourceType: Condition
      `);
      const result = yaml2fhir(data, '123', 'stu3');
      idFriendlyExpectEqual(result, {
        resourceType: 'Condition',
        subject: { reference: 'Patient/123'},
        clinicalStatus: 'active',
        verificationStatus: 'confirmed'
      });
    });

    it('should convert a Patient with top-level properties', () => {
      const data = yaml.safeLoad(`
        resourceType: Patient
        active: true
        name: [Bobby Jones]
        gender: male
        birthDate: 2000-11-30
        maritalStatus: http://hl7.org/fhir/marital-status#U Unmarried
      `);
      const result = yaml2fhir(data, '123', 'stu3');
      expect(result).to.eql({
        resourceType: 'Patient',
        id: '123',
        active: true,
        name: [{
          family: 'Jones',
          given: ['Bobby']
        }],
        gender: 'male',
        birthDate: '2000-11-30',
        maritalStatus: {
          coding: [{
            system: 'http://hl7.org/fhir/marital-status',
            code: 'U',
            display: 'Unmarried'
          }],
          text: 'Unmarried'
        }
      });
    });

    it('should convert a non-array value to an array when necessary', () => {
      const data = yaml.safeLoad(`
        resourceType: Patient
        name: Bobby Jones
      `);
      const result = yaml2fhir(data, '123', 'stu3');
      expect(result).to.eql({
        resourceType: 'Patient',
        id: '123',
        name: [{
          family: 'Jones',
          given: ['Bobby']
        }]
      });
    });


    it('should convert an Observation with top-level properties', () => {
      const data = yaml.safeLoad(`
        resourceType: Observation
        id: 456
        status: amended
        code: LOINC#12345-6 Fake LOINC Code
        issued: 2018-10-10
        comment: My Comments
      `);
      const result = yaml2fhir(data, '123', 'stu3');
      expect(result).to.eql({
        resourceType: 'Observation',
        id: '456',
        subject: { reference: 'Patient/123'},
        status: 'amended',
        code: {
          coding: [{
            system: 'http://loinc.org',
            code: '12345-6',
            display: 'Fake LOINC Code'
          }],
          text: 'Fake LOINC Code'
        },
        issued: '2018-10-10T00:00:00.000Z',
        comment: 'My Comments'
      });
    });

    it('should support choice properties like value[x]', () => {
      const data = yaml.safeLoad(`
        resourceType: Observation
        id: 456
        status: final
        code: LOINC#12345-6 Fake LOINC Code
        valueQuantity: 25 mg
      `);
      const result = yaml2fhir(data, '123', 'stu3');
      expect(result).to.eql({
        resourceType: 'Observation',
        id: '456',
        subject: { reference: 'Patient/123'},
        status: 'final',
        code: {
          coding: [{
            system: 'http://loinc.org',
            code: '12345-6',
            display: 'Fake LOINC Code'
          }],
          text: 'Fake LOINC Code'
        },
        valueQuantity: {
          value: 25,
          unit: 'mg',
          system: 'http://unitsofmeasure.org',
          code: 'mg'
        }
      });
    });

    it('should support nested properties for Backbone elements', () => {
      const data = yaml.safeLoad(`
        resourceType: Patient
        name: Rover Pupford
        animal:
          species: http://hl7.org/fhir/animal-species#canislf Dog
      `);
      const result = yaml2fhir(data, '123', 'stu3');
      expect(result).to.eql({
        resourceType: 'Patient',
        id: '123',
        name: [{
          family: 'Pupford',
          given: ['Rover']
        }],
        animal: {
          species: {
            coding: [{
              system: 'http://hl7.org/fhir/animal-species',
              code: 'canislf',
              display: 'Dog'
            }],
            text: 'Dog'
          }
        }
      });
    });

    it('should support nested properties for complex type elements', () => {
      const data = yaml.safeLoad(`
        resourceType: Observation
        id: 456
        status: final
        code:
          text: Some Lab That Is Not Coded
        valueQuantity: 25 mg
      `);
      const result = yaml2fhir(data, '123', 'stu3');
      expect(result).to.eql({
        resourceType: 'Observation',
        id: '456',
        subject: { reference: 'Patient/123'},
        status: 'final',
        code: {
          text: 'Some Lab That Is Not Coded'
        },
        valueQuantity: {
          value: 25,
          unit: 'mg',
          system: 'http://unitsofmeasure.org',
          code: 'mg'
        }
      });
    });

    it('should support nested properties for repeating Backbone elements', () => {
      const data = yaml.safeLoad(`
        resourceType: Observation
        id: 456
        status: final
        code: LOINC#12345-6 Fake LOINC Code
        component:
        -
          code: LOINC#ABCDE-1 Fake LOINC Compnent 1 Code
          valueQuantity: 10
        -
          code: LOINC#ABCDE-2 Fake LOINC Compnent 2 Code
          valueQuantity: 20
        -
          code: LOINC#ABCDE-3 Fake LOINC Compnent 3 Code
          valueQuantity: 30
      `);
      const result = yaml2fhir(data, '123', 'stu3');
      expect(result).to.eql({
        resourceType: 'Observation',
        id: '456',
        subject: { reference: 'Patient/123'},
        status: 'final',
        code: {
          coding: [{
            system: 'http://loinc.org',
            code: '12345-6',
            display: 'Fake LOINC Code'
          }],
          text: 'Fake LOINC Code'
        },
        component: [{
          code: {
            coding: [{
              system: 'http://loinc.org',
              code: 'ABCDE-1',
              display: 'Fake LOINC Compnent 1 Code'
            }],
            text: 'Fake LOINC Compnent 1 Code'
          },
          valueQuantity: {
            value: 10
          }
        },
        {
          code: {
            coding: [{
              system: 'http://loinc.org',
              code: 'ABCDE-2',
              display: 'Fake LOINC Compnent 2 Code'
            }],
            text: 'Fake LOINC Compnent 2 Code'
          },
          valueQuantity: {
            value: 20
          }
        },
        {
          code: {
            coding: [{
              system: 'http://loinc.org',
              code: 'ABCDE-3',
              display: 'Fake LOINC Compnent 3 Code'
            }],
            text: 'Fake LOINC Compnent 3 Code'
          },
          valueQuantity: {
            value: 30
          }
        }]
      });
    });

    it('should throw an error for an unsupported FHIR resource type', () => {
      const data = yaml.safeLoad(`
        resourceType: MedicationOrder
      `);
      // Note: MedicationOrder is not in STU3 (it is called MedicationRequest in STU3)
      expect(() => yaml2fhir(data, '123', 'stu3')).to.throw('Unsupported resourceType: MedicationOrder');
    });

    it('should throw an error for an invalid property', () => {
      const data = yaml.safeLoad(`
        resourceType: Procedure
        notPerformed: true
      `);
      // Note: Procedure.notPerformed is not in STU3 (it is "notDone" in STU3)
      expect(() => yaml2fhir(data, '123', 'stu3')).to.throw('Path not found: Procedure.notPerformed');
    });
  });

  describe('#4r', () => {
    it('should convert a simple blank Patient', () => {
      const data = yaml.safeLoad(`
        resourceType: Patient
      `);
      const result = yaml2fhir(data, null, 'r4');
      idFriendlyExpectEqual(result, {
        resourceType: 'Patient',
        id: 'assigned'
      });
    });

    it('should convert a simple blank Patient with supplied patientId', () => {
      const data = yaml.safeLoad(`
        resourceType: Patient
      `);
      const result = yaml2fhir(data, '123', 'r4');
      expect(result).to.eql({
        resourceType: 'Patient',
        id: '123'
      });
    });

    it('should convert a simple blank Encounter with proper defaults and reference to Patient', () => {
      const data = yaml.safeLoad(`
        resourceType: Encounter
      `);
      const result = yaml2fhir(data, '123', 'r4');
      idFriendlyExpectEqual(result, {
        resourceType: 'Encounter',
        subject: { reference: 'Patient/123'},
        status: 'finished'
      });
    });

    it('should convert a Condition whose config uses $if-present/$then/$else when target property is present', () => {
      const data = yaml.safeLoad(`
        resourceType: Condition
        abatementDateTime: 2000-12-15
      `);
      const result = yaml2fhir(data, '123', 'r4');
      idFriendlyExpectEqual(result, {
        resourceType: 'Condition',
        subject: { reference: 'Patient/123'},
        abatementDateTime: '2000-12-15T00:00:00.000Z',
        clinicalStatus: {
          coding: [{
            system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
            code: 'resolved',
            display: 'Resolved'
          }],
          text: 'Resolved'
        },
        verificationStatus: {
          coding: [{
            system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
            code: 'confirmed',
            display: 'Confirmed'
          }],
          text: 'Confirmed'
        }
      });
    });

    it('should convert a Condition whose config uses $if-present/$then/$else when target property is not present', () => {
      const data = yaml.safeLoad(`
        resourceType: Condition
      `);
      const result = yaml2fhir(data, '123', 'r4');
      idFriendlyExpectEqual(result, {
        resourceType: 'Condition',
        subject: { reference: 'Patient/123'},
        clinicalStatus: {
          coding: [{
            system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
            code: 'active',
            display: 'Active'
          }],
          text: 'Active'
        },
        verificationStatus: {
          coding: [{
            system: 'http://terminology.hl7.org/CodeSystem/condition-ver-status',
            code: 'confirmed',
            display: 'Confirmed'
          }],
          text: 'Confirmed'
        }
      });
    });

    it('should convert a Patient with top-level properties', () => {
      const data = yaml.safeLoad(`
        resourceType: Patient
        active: true
        name: [Bobby Jones]
        gender: male
        birthDate: 2000-11-30
        maritalStatus: http://hl7.org/fhir/marital-status#U Unmarried
      `);
      const result = yaml2fhir(data, '123', 'r4');
      expect(result).to.eql({
        resourceType: 'Patient',
        id: '123',
        active: true,
        name: [{
          family: 'Jones',
          given: ['Bobby']
        }],
        gender: 'male',
        birthDate: '2000-11-30',
        maritalStatus: {
          coding: [{
            system: 'http://hl7.org/fhir/marital-status',
            code: 'U',
            display: 'Unmarried'
          }],
          text: 'Unmarried'
        }
      });
    });

    it('should convert a non-array value to an array when necessary', () => {
      const data = yaml.safeLoad(`
        resourceType: Patient
        name: Bobby Jones
      `);
      const result = yaml2fhir(data, '123', 'r4');
      expect(result).to.eql({
        resourceType: 'Patient',
        id: '123',
        name: [{
          family: 'Jones',
          given: ['Bobby']
        }]
      });
    });


    it('should convert an Observation with top-level properties', () => {
      const data = yaml.safeLoad(`
        resourceType: Observation
        id: 456
        status: amended
        code: LOINC#12345-6 Fake LOINC Code
        issued: 2018-10-10
      `);
      const result = yaml2fhir(data, '123', 'r4');
      expect(result).to.eql({
        resourceType: 'Observation',
        id: '456',
        subject: { reference: 'Patient/123'},
        status: 'amended',
        code: {
          coding: [{
            system: 'http://loinc.org',
            code: '12345-6',
            display: 'Fake LOINC Code'
          }],
          text: 'Fake LOINC Code'
        },
        issued: '2018-10-10T00:00:00.000Z'
      });
    });

    it('should support choice properties like value[x]', () => {
      const data = yaml.safeLoad(`
        resourceType: Observation
        id: 456
        status: final
        code: LOINC#12345-6 Fake LOINC Code
        valueQuantity: 25 mg
      `);
      const result = yaml2fhir(data, '123', 'r4');
      expect(result).to.eql({
        resourceType: 'Observation',
        id: '456',
        subject: { reference: 'Patient/123'},
        status: 'final',
        code: {
          coding: [{
            system: 'http://loinc.org',
            code: '12345-6',
            display: 'Fake LOINC Code'
          }],
          text: 'Fake LOINC Code'
        },
        valueQuantity: {
          value: 25,
          unit: 'mg',
          system: 'http://unitsofmeasure.org',
          code: 'mg'
        }
      });
    });

    it('should support nested properties for Backbone elements', () => {
      const data = yaml.safeLoad(`
        resourceType: Patient
        name: Bob Personford
        communication:
          language: urn:ietf:bcp:47#en English
          preferred: true
      `);
      const result = yaml2fhir(data, '123', 'r4');
      expect(result).to.eql({
        resourceType: 'Patient',
        id: '123',
        name: [{
          family: 'Personford',
          given: ['Bob']
        }],
        communication: [{
          language: {
            coding: [{
              system: 'urn:ietf:bcp:47',
              code: 'en',
              display: 'English'
            }],
            text: 'English'
          },
          preferred: true
        }]
      });
    });

    it('should support nested properties for complex type elements', () => {
      const data = yaml.safeLoad(`
        resourceType: Observation
        id: 456
        status: final
        code:
          text: Some Lab That Is Not Coded
        valueQuantity: 25 mg
      `);
      const result = yaml2fhir(data, '123', 'r4');
      expect(result).to.eql({
        resourceType: 'Observation',
        id: '456',
        subject: { reference: 'Patient/123'},
        status: 'final',
        code: {
          text: 'Some Lab That Is Not Coded'
        },
        valueQuantity: {
          value: 25,
          unit: 'mg',
          system: 'http://unitsofmeasure.org',
          code: 'mg'
        }
      });
    });

    it('should support nested properties for repeating Backbone elements', () => {
      const data = yaml.safeLoad(`
        resourceType: Observation
        id: 456
        status: final
        code: LOINC#12345-6 Fake LOINC Code
        component:
        -
          code: LOINC#ABCDE-1 Fake LOINC Compnent 1 Code
          valueQuantity: 10
        -
          code: LOINC#ABCDE-2 Fake LOINC Compnent 2 Code
          valueQuantity: 20
        -
          code: LOINC#ABCDE-3 Fake LOINC Compnent 3 Code
          valueQuantity: 30
      `);
      const result = yaml2fhir(data, '123', 'r4');
      expect(result).to.eql({
        resourceType: 'Observation',
        id: '456',
        subject: { reference: 'Patient/123'},
        status: 'final',
        code: {
          coding: [{
            system: 'http://loinc.org',
            code: '12345-6',
            display: 'Fake LOINC Code'
          }],
          text: 'Fake LOINC Code'
        },
        component: [{
          code: {
            coding: [{
              system: 'http://loinc.org',
              code: 'ABCDE-1',
              display: 'Fake LOINC Compnent 1 Code'
            }],
            text: 'Fake LOINC Compnent 1 Code'
          },
          valueQuantity: {
            value: 10
          }
        },
        {
          code: {
            coding: [{
              system: 'http://loinc.org',
              code: 'ABCDE-2',
              display: 'Fake LOINC Compnent 2 Code'
            }],
            text: 'Fake LOINC Compnent 2 Code'
          },
          valueQuantity: {
            value: 20
          }
        },
        {
          code: {
            coding: [{
              system: 'http://loinc.org',
              code: 'ABCDE-3',
              display: 'Fake LOINC Compnent 3 Code'
            }],
            text: 'Fake LOINC Compnent 3 Code'
          },
          valueQuantity: {
            value: 30
          }
        }]
      });
    });

    it('should throw an error for an unsupported FHIR resource type', () => {
      const data = yaml.safeLoad(`
        resourceType: DeviceComponent
      `);
      // Note: DeviceComponent is not in R4 (it is in STU3)
      expect(() => yaml2fhir(data, '123', 'r4')).to.throw('Unsupported resourceType: DeviceComponent');
    });

    it('should throw an error for an invalid property', () => {
      const data = yaml.safeLoad(`
        resourceType: Procedure
        notDone: true
      `);
      // Note: Procedure.notDone was removed in R4
      expect(() => yaml2fhir(data, '123', 'r4')).to.throw('Path not found: Procedure.notDone');
    });
  });
});

// Checks equality, allowing for a run-time assigned id
function idFriendlyExpectEqual(actual, expected) {
  // First make sure an id was assigned
  expect(typeof actual.id).to.equal('string');
  expect(actual.id.length).to.be.greaterThan(0);
  // Then set the id on the expected object, so at least that is equal
  expected.id = actual.id;
  // And finally check equality
  expect(actual).to.eql(expected);
}
