# Creating YAML Test Cases

CQL Testing Framework tests are written as files in the YAML format.  If you are not familiar with YAML, you may find the [YAML Cheat Sheet](https://kapeli.com/cheat_sheets/YAML.docset/Contents/Resources/Documents/index) helpful as you review this documentation or write YAML test cases.

Each YAML file in the `tests` folder is a separate test case.  Each file has the following general components:

* **name**: The name of the test case.
* **externalData**: A YAML [array](https://yaml.org/spec/1.2/spec.html#id2802662) of the names of other YAML files which may contain [anchored](https://yaml.org/spec/1.2/spec.html#id2785586) resource definitions which can be referenced below under the `data` section. See "Reusing Resources" below for more information.
* **data**: A sequence (i.e., array) of the resource instances making up the test case (with the `Patient` resource as the first one). Can include YAML references to anchored resources defined in any YAML files listed under the `externalData` section.
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

The CQL Testing framework now supports all FHIR DSTU2, STU3, and R4 resource types.  It provides this support by dynamically referencing the formal FHIR definitions of each resource, ensuring that specified fields in the YAML file are valid fields for that resource.

The CQL Testing Framework assigns default patient references and _some_ default values, as well as user-friendly aliases (where applicable).  For detailed information about each supported resource, its defaults, and its aliases, see the detailed documentation linked below:

[FHIR DSTU2 Resources Documentation](FHIR_DSTU2.md)

[FHIR STU3 Resources Documentation](FHIR_STU3.md)

[FHIR R4 Resources Documentation](FHIR_R4.md)

### Attribute Types

When constructing YAML test cases, standard types (such as `string`, `boolean`, `integer`) are represented via the noraml YAML representations of those types.  The CQL Testing Framework, however, also provides advanced support for the following other common FHIR data types: `Quantity`, `date`, `dateTime`, `Period`, `CodeableConcept`, `Coding`, `id`, `Reference`, `HumanName`, and arbitrary complex types.  Further details on each type are below.

#### Attribute Type: Quantity

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

#### Attribute Type: dateTime

A string formatted as an ISO 8601 compliant datetime.

Examples:

* `2008-11-12T16:00:00.000`
* `2008-11-12T16:00:00.000Z`
* `2008-11-12T16:00:00.000+00:00`

#### Attribute Type: Period

A start datetime and end datetime separated by ` - `.  If only one datetime is supplied, it is considered to be the start datetime.

Examples:

* `2008-11-12T16:00:00.000 - 2008-11-12T17:00:00.000`
* `2008-11-12T16:00:00.000Z - 2008-11-12T17:00:00.000Z`
* `2008-11-12T16:00:00.000`

#### Attribute Type: CodeableConcept / Coding

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

A string identifier.  If none is provided for a data instance, it will default to a randomly generated UUIDv4 string.

Examples:

* `2142fd65-893d-45f8-a2a3-ca9bae7f5dbc`
* `547`
* `patient-1`

#### Attribute Type: Reference

A string identifier for a reference to another instance.  May contain just the id, the type and id, or a full URL.

Examples:

* `2142fd65-893d-45f8-a2a3-ca9bae7f5dbc`
* `Patient/547`
* `http://example.org/fhir/Patient/patient-1`

#### Attribute Type: HumanName

A human name.  If only one word is provided, it is assumed to be the first name.  If more than one word is provided, only the last word is considered to be the last name.

Examples:

* `Sally`
* `Sally Jones`
* `Sally Jane Jones`

#### Attribute Type: Complex Types

A type that is a complex structure, i.e., has nested attributes and values.  These types are supported via the normal YAML mechanism of indenting nested attribute/value pairs.

Example of specifying two Observation components (note: this demonstrates array notation as well):

```
  component:
  -
    code: LOINC#8480-6 Systolic Blood Pressure
    valueQuantity: 109 mm[Hg]
  -
    code: LOINC#8462-4 Diastolic Blood Pressure
    valueQuantity: 44 mm[Hg]
```

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
- `$import`: Imports all resources included within the referenced anchor into the current test case.
- `$iterate`: Creates a set of test cases, each containing just one of the resources within the referenced anchor. If the referenced anchor contains `N` resources, `N` different test cases will be created, each of which will also contain any other resources listed in the main test case file. If there are multiple `$iterate` methods, a test case will be generated for every possible combination of them. For example, if there are two `$iterate` methods and the first contains `M` resources and the second contains `N` resources, this will result in `M x N` test cases.

#### Example

Consider some resources stored in a plain YAML file named `reusable_resources.yml`:

```yaml
# This key should be unique, but otherwise can be named anything that is valid YAML.
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
name: Example of using reusable resources from another file

# This tells `cql-testing` to import everything contained in `reusable_resources.yml`.
externalData:
- reusable_resources

data:
-
  resourceType: Patient
  name: Fuller Jackson
  gender: male
  birthDate: 1954-02-16
# Note use of alias (*) indicator to reference `painRelatedConditions`.
-
  $import: *painRelatedConditions
```

See `test\yaml\pain_dstu2\tests\` for more examples, including use of the `$iterate` keyword.

### Intra reusable resources

Because they rely on the built-in YAML features of anchors and references, reusable resources can be placed in the main test case file instead of in a separate file. This can useful if there is a single or small handful of data elements that are being reused. The following example illustrates this capability.

#### Example

In the following example the CQL library is expected to output three seperate expressions which should all include the same resources.

```yaml
---
name: Example of using reusable resources from within the same file

# This key should be unique, but otherwise can be named anything that is valid YAML.
reusable_resources:
- &painRelatedConditions
  - resourceType: Condition
    code: SNOMED#203082005 Fibromyalgia (disorder)
    onsetDateTime: 2012-04-05
  - resourceType: Condition
    code: SNOMED#191722009 Agoraphobia with panic attacks (disorder)
    onsetDateTime: 2014-09-05

# In contrast with previous example, there are no external data files listed here.

data:
-
  resourceType: Patient
  name: Fuller Jackson
  gender: male
  birthDate: 1954-02-16
-
  $import: *painRelatedConditions

# These three output expressions should contain the same results
results:
  PainRelatedConditions: *painRelatedConditions
  ConditionsRelatedToPain: *painRelatedConditions
  AllConditions: *painRelatedConditions
```