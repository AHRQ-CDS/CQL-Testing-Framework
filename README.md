# CQL Testing Framework

The CQL Testing Framework provides a simple mechanism for developing and maintaining automated test suites for FHIR-based [CQL](https://cql.hl7.org/) logic.

Current capabilities include:

* Author test case data and expectations using [YAML](https://yaml.org/)
* Execute test cases against CQL logic using [FHIR 1.0.2 (DSTU2)](http://hl7.org/fhir/DSTU2/resourcelist.html) or [FHIR 3.0.0 (STU3)](http://hl7.org/fhir/STU3/resourcelist.html) model and [VSAC](https://vsac.nlm.nih.gov/) value sets
* Display _diff_ rendering of actual vs. expected results for test failures
* Run standalone or integrate CQL tests into existing [Mocha](https://mochajs.org/) test suites
* Export test data as FHIR bundles for integration into a test server
* Export test results as JSON for further investigation and debugging
* Configure project to support custom layouts

Current limitations:

* Only FHIR 1.0.2 (DSTU2) and 3.0.0 (STU3) are supported
* Only the following resources are supported: Patient, Condition, Encounter, MedicationOrder, MedicationStatement, Observation, Procedure
* Only VSAC value sets are supported

# Required Software

You must [install Node.js](https://nodejs.org/en/download/) to use the CQL Testing Framework.  Node.js 8.x is confirmed to work, but more recent releases may also work.

# Integrating the CQL Testing Framework

The CQL Testing Framework is a Node.js module.  For the alpha release, it is distributed as a compressed file: `cql-testing-v1.0.0-alpha.5.tgz`. If you've downloaded the cql-testing source code, you'll find a copy of this file in the `dist/` folder.

## Typical Project Structure

The following is a typical file structure for a CQL project.  This documentation will assume this structure, but other structures can be supported via configuration.

```
.
├── cql
│   ├── FHIRHelpers.cql
│   ├── FHIRHelpers.json
│   ├── MyCDSLogic.cql
│   └── MyCDSLogic.json
├── node_modules
│   └── ... // these contents are entirely managed by Node.js/NPM
├── package.json
└── test
    ├── cases
    │   ├── is-included.yaml
    │   ├── is-not-included.yaml
    │   └── another-test-case.yaml
    ├── cqlt.yaml
    └── test.js
```

### ./cql

Your CQL _and ELM JSON_ files should reside somewhere in your project. The easiest configuration is to put them into a single `cql` folder, but other configurations are supported as well.

If your CQL logic uses any other CQL libraries, those must be provided as well. Again, it is easiest to put them in the same `cql` folder along side your own CQL, but this is not strictly necessary.

Each CQL file must have its corresponding ELM JSON file. The CQL Testing Framework currently does not support any method for translating CQL to ELM JSON. If you use the [CDS Authoring Tool](https://cds.ahrq.gov/authoring/), the downloaded zip package will already contain ELM JSON.  If you only have the CQL source, you must translate it to ELM JSON using something like the [CQL-to-ELM translator](https://github.com/cqframework/clinical_quality_language/blob/master/Src/java/cql-to-elm/OVERVIEW.md).

### ./node_modules

This folder is managed by Node.js and the Node Package Manager (NPM). You do not need to create this folder, nor should you manually modify it. It will be created and updated using the `npm` commandline utility.

### ./package.json

The `package.json` file contains the Node.js configuration data for your project. Most importantly, this defines the project's dependency on the CQL Testing Framework as well as the commands to execute the tests.  This file is covered in more detail below.

### ./test

The `test` folder contains the test cases and test configuration used by the CQL Testing Framework.

### ./test/cases

The `test/cases` folder contains the test cases defined in the YAML format. Descriptions of the YAML test case format are detailed further below.

### ./test/cqlt.yaml

The `test/cqlt.yaml` file contains configuration data used by the CQL Testing Framework. This configuration file is described in more detail below.

### ./test/test.js

The `test/test.js` file is a very simple "bootstrap" file used as an entry point for running the CQL tests using the Mocha test runner. It is covered in more detail below.

## The package.json File

The snippet below is a minimal `package.json` file for integrating the CQL Testing Framework.  If you have an existing `package.json` file, add the dependencies and `test` script as shown below; otherwise create a `package.json` at the root of your CQL project with the following contents (modifying the `"name"` and `"version`" values):

```json
{
  "name": "my-cql-project",
  "version": "1.0.0",
  "scripts": {
    "test": "./node_modules/.bin/mocha --reporter spec --recursive"
  },
  "devDependencies": {
    "mocha": "^5.2.0",
    "cql-testing": "file:./cql-testing-v1.0.0-alpha.5.tgz"
  }
}
```

## The cqlt.yaml File

The `cqlt.yaml` file provides important configuration data about where your CQL source is, where your test cases are, and other optional parameters. If you have multiple CQL libraries to test, you can either put unique `cqlt.yaml` files in different subfolders, or you can give them unique names, as long as they end with `cqlt.yaml` (for example, `my-cds-cqlt.yaml` and `other-cds.cqlt.yaml`).

The following configuration parameters are currently supported:

* **library**:
  * **name**: The name of the CQL library to test _(required, string)_
  * **version**: The version of the CQL library to test _(optional, string, default: latest version)_'
  * **paths**: The path(s) at which the library and its dependencies can be found _(optional, string array, default: cql)_'
* **hooks**: The hook id(s) corresponding to this library; needed only for exporting Postman collections _(optional)_
* **tests**:
  * **path**: The file path containing the test case files _(optional, string, default: tests)_
* **options**:
  * **date**: The execution date to use as "Now()" when CQL executes tests _(optional, ISO 8601 formatted date string enclosed in double-quotes (`"`), default: now)_
  * **vsac**:
    * **user**: The UMLS user name to use when connecting to the VSAC _(optional, string)_
    * **password**: The UMLS password to use when connecting to the VSAC _(optional, string)_
    * **cache**: The file path for the value set cache _(optional, string, default: .vscache)_
  * **dumpFiles**:
    * **enabled**: Indicates if test data and actual results should be dumped to files for debugging or testing; supports bundles, CQL Hooks requests, and Postman collections of CQL Hooks requests _(optional, boolean, default: false)_
    * **path**: The file path to dump files to, if enabled _(optional, string, default: dump\_files)_

All file paths are relative to the location of the `cqlt.yaml` configuraton file unless the file path is absolute.

The following is an example `cqlt.yaml` file that corresponds with the file structure indicated above:

```yaml
---
library:
  name: My_CDS_Artifact
  paths: ../cql
hooks: my-cds-hook
tests:
  path: cases
options:
  date: "2018-12-10T00:00:00.0Z"
```

## The test/test.js File

Since the CQL Testing Framework leverages the Mocha testing library, it requires a `test.js` file as an entrypoint to the test suite.  The following is a very simple `test.js` file:

```js
const cqlt = require('cql-testing');
const path = require('path');

cqlt.test(path.join(__dirname));
```

This assumes that the `cqlt.yaml` config file is in the same folder as the `test.js` file.  If that's not the case, change test argument from `path.join(__dirname)` to the path where the `cqlt.yaml` file is.

# Creating YAML Test Cases

CQL Testing Framework tests are written as files in the YAML format.  If you are not familiar with YAML, you may find the [YAML Cheat Sheet](https://kapeli.com/cheat_sheets/YAML.docset/Contents/Resources/Documents/index) helpful as you review this documentation or write YAML test cases.

Each YAML file in the `tests` folder is a separate test case.  Each file has the following general components:

* **name**: The name of the test case
* **data**: A sequence (i.e., array) of the resource instances making up the test case (with the `Patient` resource as the first one)
* **results**: A hash (i.e. object) for which each key corresponds to a CQL expression name and the value is the _expected_ result for that CQL expression

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

### Resource Type: Patient

FHIR doc:
* DSTU2: [http://hl7.org/fhir/DSTU2/patient.html](http://hl7.org/fhir/DSTU2/patient.html)
* STU3: [http://hl7.org/fhir/STU3/patient.html](http://hl7.org/fhir/STU3/patient.html)

Supported attributes:

* **resourceType** _(must be Patient)_
* **id** _(id)_
* **name** _(name)_
* **gender** _(string, options: [DSTU2](http://hl7.org/fhir/DSTU2/valueset-administrative-gender.html) / [STU3](http://hl7.org/fhir/STU3/valueset-administrative-gender.html))_
* **birthDate** _(date)_

### Resource Type: Condition

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

### Resource Type: Encounter

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

### Resource Type: MedicationOrder (DSTU2 only)

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

### Resource Type: MedicationRequest (STU3 only)

FHIR doc:
* STU3: [http://hl7.org/fhir/STU3/medicationrequest.html](http://hl7.org/fhir/STU3/medicationrequest.html)

Supported attributes:

* **resourceType**: _(must be MedicationRequest)_
* **id**: _(id)_
* **authoredOn**: _(dateTime)_
* **status**: _(string, [options](http://hl7.org/fhir/STU3/valueset-medication-request-status.html), default: active)_
* **subject**: _(patient-reference, default: current patient)_
* **medicationCodeableConcept**: _(concept)_

### Resource Type: MedicationStatement

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

### Resource Type: Observation

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

### Resource Type: Procedure

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


### Attribute Type: string

A simple string of text.

Examples:

* `confirmed`
* `text with spaces`

### Attribute Type: boolean

A boolean value.  Must be `true` or `false`.

Examples:

* `true`
* `false`

### Attribute Type: quantity

A quantity of measurement with or without units specified.  If units are specified, then they should be valid [UCUM](http://unitsofmeasure.org) units.

Examples:

* `8`
* `8.5`
* `130 mg/dL`
* `130.5 mg/dL`

### Attribute Type: date

A string having the format: `yyyy-MM-dd`.

Examples:

* `2018-11-05`

### Attribute Type: datetime

A string formatted as an ISO 8601 compliant datetime.

Examples:

* `2008-11-12T16:00:00.000`
* `2008-11-12T16:00:00.000Z`
* `2008-11-12T16:00:00.000+00:00`

### Attribute Type: period

A start datetime and end datetime separated by ` - `.  If only one datetime is supplied, it is considered to be the start datetime.

Examples:

* `2008-11-12T16:00:00.000 - 2008-11-12T17:00:00.000`
* `2008-11-12T16:00:00.000Z - 2008-11-12T17:00:00.000Z`
* `2008-11-12T16:00:00.000`

### Attribute Type: concept

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

### Attribute Type: id

A string identifier.  If none is provided, it will default to a randomly generated UUIDv4 string.

Examples:

* `2142fd65-893d-45f8-a2a3-ca9bae7f5dbc`
* `547`
* `patient-1`

### Attribute Type: patient-reference

A string identifier for a patient to reference.  In most cases, if none is provided, the current patient will be assumed.

Examples:

* `2142fd65-893d-45f8-a2a3-ca9bae7f5dbc`
* `547`
* `patient-1`

### Attribute Type: name

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

# Running the CQL Tests

## Setting Up to Run the Tests for the First Time

### Installing Dependencies

After configuring your project for the CQL Testing Framework, you must download the CQL Testing Framework dependencies.  This is done by opening a command prompt window, navigating to the folder containing your project, and running `npm install`.

```sh
$ cd /path/to/my/cql/project
$ npm install
```

This only needs to be done once.  After this, your `node_modules` folder will be populated and all test runs will reference it for the necessary dependencies.

### Downloading Value Sets

If your CQL uses value sets from the Value Set Authority Center (VSAC), then the first time you run the tests, they will need to download the value set definitions from VSAC.  Downloading value sets from VSAC requires a VSAC account.  You can configure your VSAC account by setting the `options->vsac->user` and `options-vsac-password` properties in your `cqlt.yaml` file.  If you prefer not to modify the config file, you may set `UMLS_USER_NAME` and `UMLS_PASSWORD` environment variables instead.

Once you've run the tests the first time and downloaded the value sets, they'll be stored in a VSAC cache folder (defaulted to `/.vscache` in the same folder as the `cqlt.yaml` file).  After that, you do not need your VSAC credentials anymore since the CQL Testing Framework will just use the cache.

## Running the Tests

At this point, running the tests is easy.  Open a command prompt window, navigate to the CQL project folder, and run `npm test`.

```sh
$ cd /path/to/my/cql/project
$ npm test
```

If the tests succeed, you'll see a report indicating such:

```
CQLT Config: /path/to/my/cql/project/test/cqlt.yaml


  My_CDS_Artifact_v1.0.0
    ✓ Meets Inclusion Criteria (40 y.o. male w/ Oxycodone)
    ✓ Doesn't Meet Incusion Criteria (40 y.o. male w/out Oxycodone)


  2 passing (26ms)
```

If they fail, you'll see a report indicating the failure along with the different actual and expected values:

```
CQLT Config: /path/to/my/cql/project/test/cqlt.yaml


  My_CDS_Artifact_v1.0.0
    1) Meets Inclusion Criteria (40 y.o. male w/ Oxycodone)
    ✓ Doesn't Meet Incusion Criteria (40 y.o. male w/out Oxycodone)


  1 passing (26ms)
  1 failing

  1) My_CDS_Artifact_v1.0.0
       Meets Inclusion Criteria (40 y.o. male w/ Oxycodone)

      Summary=<[object Object]>
      + expected - actual

      -  "MeetsInclusionCriteria": true
      +  "MeetsInclusionCriteria": false

```
