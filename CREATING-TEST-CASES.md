# Creating YAML Test Cases

CQL Testing Framework tests are written as files in the YAML format.  If you are not familiar with YAML, you may find the [YAML Cheat Sheet](https://kapeli.com/cheat_sheets/YAML.docset/Contents/Resources/Documents/index) helpful as you review this documentation or write YAML test cases.

Each YAML file in the `tests` folder is a separate test case.  Each file has the following general components:

* **name**: The name of the test case.
* **externalResourceLibraries**: A YAML array of the names of other YAML files which may contain anchored resource definitions which can be referenced below under data. See "Reusing Resources" below for more information.
* **data**: A sequence (i.e., array) of the resource instances making up the test case (with the `Patient` resource as the first one). Can include YAML references to anchored resources defined in any libraries listed under externalResourceLibraries.
* **results**: A hash (i.e. object) for which each key corresponds to a CQL expression name and the value is the _expected_ result for that CQL expression.

The following is a very simple example of a test case for a fictional CQL library with inclusion criteria that the patient must be male, over 18, and have an Opiod prescription on record.  It sets up test data for a 40 year-old male with an Oxycodone prescription and specifies that the `MeetsInclusionCriteria` CQL expression should evaluate to `true`.

```yaml
---
name: Meets Inclusion Criteria (40 y.o. male w/ Oxycodone)

data:
-
  resourceType: Patient
  name: Joe Smith
  gender: male
  birthDate: 1978-07-16
-
  resourceType: MedicationOrder
  code: RXNORM#1049599 12 HR Oxycodone Hydrochloride 80 MG Extended Release Oral Tablet
  dateWritten: 2018-12-05

results:
  MeetsInclusionCriteria: true

```

## The data Section

The `data` section of the YAML file contains all of the data that will be associated to the patient record that the CQL will be run against. This data is represented as a sequence (array) of objects in YAML. Each object has a `resourceType` indicating its FHIR type.  Other attributes on the object are specific to the FHIR resource type.

### Resource Types

The following FHIR resource types are supported: `Patient`, `Condition`, `Encounter`, `MedicationOrder` (DSTU2 only), `MedicationRequest` (STU3 only),`MedicationStatement`, `Observation`, `Procedure`.  Further details on each type are below.

#### Resource Type: Patient

FHIR doc:
* DSTU2: [http://hl7.org/fhir/DSTU2/patient.html](http://hl7.org/fhir/DSTU2/patient.html)
* STU3: [http://hl7.org/fhir/STU3/patient.html](http://hl7.org/fhir/STU3/patient.html)

Supported attributes:

* **resourceType** _(must be Patient)_
* **id** _(id)_
* **name** _(name)_
* **gender** _(string, options: [DSTU2](http://hl7.org/fhir/DSTU2/valueset-administrative-gender.html) / [STU3](http://hl7.org/fhir/STU3/valueset-administrative-gender.html))_
* **birthDate** _(date)_

#### Resource Type: Condition

FHIR doc:
* DSTU2: [http://hl7.org/fhir/DSTU2/condition.html](http://hl7.org/fhir/DSTU2/condition.html)
* STU3: [http://hl7.org/fhir/STU3/condition.html](http://hl7.org/fhir/STU3/condition.html)

Supported attributes:

* **resourceType**: _(must be Condition)_,
* **id**: _(id)_
* **patient (DSTU2)**: _(patient-reference, default: current patient)_
* **subject (STU3)**: _(patient-reference, default: current patient)_
* **code**: _(concept)_
* **clinicalStatus**: _(string, options: [DSTU2](http://hl7.org/fhir/DSTU2/valueset-condition-clinical.html) / [STU3](http://hl7.org/fhir/STU3/valueset-condition-clinical.html), default: resolved if abatementDateTime is specified, active otherwise)_
* **verificationStatus**: _(string, options: [DSTU2](http://hl7.org/fhir/DSTU2/valueset-condition-ver-status.html) / [STU3](http://hl7.org/fhir/STU3/valueset-condition-ver-status.html), default: confirmed)_
* **onsetDateTime**: _(datetime)_
* **dateRecorded (DSTU2)**: _(date)_
* **assertedDate (STU3)**: _(dateTime)_
* **abatementDateTime**: _(datetime)_

#### Resource Type: Encounter

FHIR doc:
* DSTU2: [http://hl7.org/fhir/DSTU2/encounter.html](http://hl7.org/fhir/DSTU2/encounter.html)
* STU3: [http://hl7.org/fhir/STU3/encounter.html](http://hl7.org/fhir/STU3/encounter.html)

Supported attributes:

* **resourceType**: _(must be Encounter)_
* **id**: _(id)_
* **status**: _(string, options: [DSTU2](http://hl7.org/fhir/DSTU2/valueset-encounter-state.html) / [STU3](http://hl7.org/fhir/STU3/valueset-encounter-status.html), default: finished)_
* **class**: _(string (DSTU2) / concept (STU3), options: [DSTU2](http://hl7.org/fhir/DSTU2/valueset-encounter-class.html) / [STU3](http://hl7.org/fhir/STU3/v3/ActEncounterCode/vs.html))_
* **type**: _(concept)_
* **patient (DSTU2)**: _(patient-reference, default: current patient)_
* **subject (STU3)**: _(patient-reference, default: current patient)_
* **reason**: _(sequence of concepts)_
* **period**: _(period)_

#### Resource Type: MedicationOrder (DSTU2 only)

FHIR doc:
* DSTU2: [http://hl7.org/fhir/DSTU2/medicationorder.html](http://hl7.org/fhir/DSTU2/medicationorder.html)

Supported attributes:

* **resourceType**: _(must be MedicationOrder)_
* **id**: _(id)_
* **dateWritten**: _(dateTime)_
* **status**: _(string, [options](http://hl7.org/fhir/DSTU2/valueset-medication-order-status.html), default: active)_
* **dateEnded**: _(dateTime)_
* **patient**: _(patient-reference, default: current patient)_
* **medicationCodeableConcept**: _(concept)_

#### Resource Type: MedicationRequest (STU3 only)

FHIR doc:
* STU3: [http://hl7.org/fhir/STU3/medicationrequest.html](http://hl7.org/fhir/STU3/medicationrequest.html)

Supported attributes:

* **resourceType**: _(must be MedicationRequest)_
* **id**: _(id)_
* **authoredOn**: _(dateTime)_
* **status**: _(string, [options](http://hl7.org/fhir/STU3/valueset-medication-request-status.html), default: active)_
* **subject**: _(patient-reference, default: current patient)_
* **medicationCodeableConcept**: _(concept)_

#### Resource Type: MedicationStatement

FHIR doc:
* DSTU2: [http://hl7.org/fhir/DSTU2/medicationstatement.html](http://hl7.org/fhir/DSTU2/medicationstatement.html)
* STU3: [http://hl7.org/fhir/STU3/medicationstatement.html](http://hl7.org/fhir/STU3/medicationstatement.html)

Supported attributes:

* **resourceType**: _(must be MedicationStatement)_
* **id**: _(id)_
* **patient (DSTU2)**: _(patient-reference, default: current patient)_
* **subject (STU3)**: _(patient-reference, default: current patient)_
* **dateAsserted**: _(dateTime)_
* **status**: _(string, options: [DSTU2](http://hl7.org/fhir/DSTU2/valueset-medication-statement-status.html) / [STU3](http://hl7.org/fhir/STU3/valueset-medication-statement-status.html), default: active)_
* **wasNotTaken (DSTU2)**: _(boolean, default: false)_
* **taken (STU3)**: _(string, [options](http://hl7.org/fhir/STU3/valueset-medication-statement-taken.html), default: y)_
* **effectiveDateTime**: _(dateTime)_
* **effectivePeriod**: _(period)_
* **medicationCodeableConcept**: _(concept)_

#### Resource Type: Observation

FHIR doc:
* DSTU2: [http://hl7.org/fhir/DSTU2/observation.html](http://hl7.org/fhir/DSTU2/observation.html)
* STU3: [http://hl7.org/fhir/STU3/observation.html](http://hl7.org/fhir/STU3/observation.html)

Supported attributes:

* **resourceType**: _(must be Observation)_
* **id**: _(id)_
* **status**: _(string, options: [DSTU2](http://hl7.org/fhir/DSTU2/valueset-observation-status.html) / [STU3](http://hl7.org/fhir/STU3/valueset-observation-status.html), default: final), default: final)_
* **category**: _(concept (DSTU2), sequence of concepts (STU3))_
* **code**: _(concept)_
* **subject**: _(patient-reference, default: current patient)_
* **effectiveDateTime**: _(dateTime)_
* **issued**: _(dateTime)_
* **valueCodeableConcept**: _(concept, if provided then all other value[x] must be absent)_
* **valueQuantity**: _(quantity, if provided then all other value[x] must be absent)_
* **valueString**: _(string, if provided then all other value[x] must be absent)_
* **interpretation**: _(concept)_
* **method**: _(concept)_
* **component**:
  * **code**: _(concept)_
  * **valueCodeableConcept**: _(concept, if provided then all other component->value[x] must be absent)_
  * **valueQuantity**: _(quantity, if provided then all other component->value[x] must be absent)_

#### Resource Type: Procedure

FHIR doc:
* DSTU2: [http://hl7.org/fhir/DSTU2/procedure.html](http://hl7.org/fhir/DSTU2/procedure.html)
* STU3: [http://hl7.org/fhir/STU3/procedure.html](http://hl7.org/fhir/STU3/procedure.html)

Supported attributes:

* **resourceType**: _(must be Procedure)_
* **id**: _(id)_
* **subject**: _(patient-reference, default: current patient)_
* **status**: _(string, options: [DSTU2](http://hl7.org/fhir/DSTU2/valueset-procedure-status.html) / [STU3](http://hl7.org/fhir/STU3/valueset-event-status.html), default: completed)_
* **category**: _(concept)_
* **code**: _(concept)_
* **notPerformed (DSTU2)**: _(boolean, default: false)_
* **notDone (STU3)**: _(boolean, default: false)_
* **performedDateTime**: _(dateTime)_
* **performedPeriod**: _(period)_
* **outcome**: _(concept)_

### Attribute Types

The following attribute types are supported: `string`, `boolean`, `quantity`, `date`, `datetime`, `period`, `concept`, `id`, `patient-reference`, `name`, `observation-component`.  Further details on each type are below.


#### Attribute Type: string

A simple string of text.

Examples:

* `confirmed`
* `text with spaces`

#### Attribute Type: boolean

A boolean value.  Must be `true` or `false`.

Examples:

* `true`
* `false`

#### Attribute Type: quantity

A quantity of measurement with or without units specified.  If units are specified, then they should be valid [UCUM](http://unitsofmeasure.org) units.

Examples:

* `8`
* `8.5`
* `130 mg/dL`
* `130.5 mg/dL`

#### Attribute Type: date

A string having the format: `yyyy-MM-dd`.

Examples:

* `2018-11-05`

#### Attribute Type: datetime

A string formatted as an ISO 8601 compliant datetime.

Examples:

* `2008-11-12T16:00:00.000`
* `2008-11-12T16:00:00.000Z`
* `2008-11-12T16:00:00.000+00:00`

#### Attribute Type: period

A start datetime and end datetime separated by ` - `.  If only one datetime is supplied, it is considered to be the start datetime.

Examples:

* `2008-11-12T16:00:00.000 - 2008-11-12T17:00:00.000`
* `2008-11-12T16:00:00.000Z - 2008-11-12T17:00:00.000Z`
* `2008-11-12T16:00:00.000`

#### Attribute Type: concept

A string with the format: `SYSTEM#code Optional Display Text`.  The following system abbreviations are supported:

| Abbreviation | URI |
| --- | --- |
| SNOMED, SNOMEDCT, SNOMED-CT, SCT | http://snomed.info/sct |
| LOINC | http://loinc.org |
| RXNORM, RXN, RX | http://www.nlm.nih.gov/research/umls/rxnorm |
| UCUM | http://unitsofmeasure.org |
| CPT | http://www.ama-assn.org/go/cpt |
| CVX | http://hl7.org/fhir/sid/cvx |
| ICD-10, ICD10 | http://hl7.org/fhir/sid/icd-10 |
| ICD-10-CM, ICD10CM | http://hl7.org/fhir/sid/icd-10-cm |
| ICD-9, ICD9, ICD-9-CM | http://hl7.org/fhir/sid/icd-9-cm |
| OBS-CAT, OBSCAT | http://hl7.org/fhir/observation-category |

In addition, URIs can be used directly as the system.

Examples:

* `RXNORM#198440 Acetaminophen 500 MG Oral Tablet`
* `SNOMED#203082005 Fibromyalgia (disorder)`
* `http://custom-system.org/codes#12345 Example Custom Code`

#### Attribute Type: id

A string identifier.  If none is provided, it will default to a randomly generated UUIDv4 string.

Examples:

* `2142fd65-893d-45f8-a2a3-ca9bae7f5dbc`
* `547`
* `patient-1`

#### Attribute Type: patient-reference

A string identifier for a patient to reference.  In most cases, if none is provided, the current patient will be assumed.

Examples:

* `2142fd65-893d-45f8-a2a3-ca9bae7f5dbc`
* `547`
* `patient-1`

#### Attribute Type: name

A human name.  If only one word is provided, it is assumed to be the first name.  If more than one word is provided, only the last word is considered to be the last name.

Examples:

* `Sally`
* `Sally Jones`
* `Sally Jane Jones`

## The results Section

The `results` section contains the expected results when the data is run against the CQL logic.  For each key specified in the `results` section, the CQL Testing Framework will compare its value to the actual value of the CQL expression of the same name.  Any CQL expressions without corresponding keys in the `results` section are not checked.  This allows test authors to check the expressions they care about but ignore others (which are often just _intermediate_ expressions anyway).

The following is an example of a `results` section:

```yaml
results:
  MeetsInclusionCriteria: false
  Recommendation: null
```

The above `results` section indicates that the CQL expression named `MeetsInclusionCriteria` should evaluate to `false`, and the cql expression named `Recommendation` should evaluate to `null`.  If the actual CQL results were different than these expected values, the test would _fail_.

Nested structures are allowed.  For example, the following is valid (assuming it matches the structure of the returned CQL expression types):

```yaml
results:
  PatientDetails:
    Age: 40
    IsMale: true
  Recommendation: Do it!
```

_NOTE: When comparing _expected_ results, the CQL Testing Framework converts CQL Dates and DateTimes to _strings_ before comparing.  For this reason, you must specify any expected dates or datetime results as strings, delimited with single quotes (e.g.,  `'2017-11-15T16:00:00.000+00:00'`).

Aside from directly specifying the expected value of expressions output by the CQL, tests results can also verify certain output expression properties. This is done by the special `$should` expression, as shown in the following example:

```yaml
results:
  # To check for strict equality, simply list desired output objects under `results`.
  FirstCqlExpression:
  ...
  # Can also verify certain output object properties by using `$should` expressions.
  # The following indicates that the SecondCqlExpression object should exist.
  SecondCqlExpression: $should exist
  # The following indicates that these outputs should be arrays of length 1
  ThirdCqlExpression: $should have length 1
  FourthCqlExpression: $should have length 1
```

Currently only the `exist` and `have length` methods are supported.

## Reusing Resources

As mentioned earlier, resources can be defined in separate YAML files (using the same format as described above) and then referenced in named test cases. Reusable resources must be marked using YAML anchor (`&`) indicators and then referenced using YAML alias (`*`) indicators.

### Reuse Methods

There are two methods that are currently supported for resource reuse:
- `$importAll`: Imports all resources included within the referenced anchor into the current test case.
- `$iterateOver`: Creates a set of test cases, each containing just one of the resources within the referenced anchor. If the referenced anchor contains `N` resources, `N` different test cases will be created, each of which will also contain any other resources listed in the file.

### Example

Consider some resources stored in a plain YAML file named `reusable_resources.yml`:

```yaml
reusable_resources:
# Note use of anchor (&) indicator that allows `painRelatedConditions` to be referenced elsewhere.
- &painRelatedConditions
  - resourceType: Condition
    code: SNOMED#203082005 Fibromyalgia (disorder)
    onsetDateTime: 2012-04-05
  - resourceType: Condition
    code: SNOMED#191722009 Agoraphobia with panic attacks (disorder)
    onsetDateTime: 2014-09-05
```

These resources can be referenced in a named test case YAML file as follows:

```yaml
---
name: Example of using reusable resources

# This tells `cql-testing` to import everything contained in `reusable_resources.yml`.
externalResourceLibraries:
- reusable_resources

data:
-
  resourceType: Patient
  name: Fuller Jackson
  gender: male
  birthDate: 1954-02-16
# Note use of alias (*) indicator to reference `painRelatedConditions`.
-
  $importAll: *painRelatedConditions
```

See `test\yaml\pain_dstu2\tests\` for more examples, including use of the `$iterateOver` keyword.
