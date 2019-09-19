# CQL Execution VSAC Code Service

This project establishes a VSAC-enabled code service module for use with the CQL Execution Engine.  This allows the
CQL Execution Engine to execute CQL containing references to Value Sets that are published in the National Library of
Medicine's (NLM) Value Set Authority Center (VSAC).  Value Set references should be defined using OIDS.  For example:

```
valueset "Diabetes": '2.16.840.1.113883.3.464.1003.103.12.1001'
```

This library requires that the credentials of a valid UMLS account be provided to it.  If you do not have an UMLS
account, you can request one here: https://uts.nlm.nih.gov/license.html

# Setting Up the Environment

To use this project, you should perform the following steps:

1. Install [Node.js](https://nodejs.org/en/download/)
2. Install [Yarn](https://yarnpkg.com/en/docs/install)
3. Execute the following from this project's root directory: `yarn`

# Using the VSAC Code Service

## The Local Cache

The VSAC Code Service is constructed with a file path pointing to the location where the cache should be stored.  If
a file location is not passed into the constructor, it will default the cache to a folder called `vsac_cache` in the
working directory.  The cache is used to store value sets and their codes after retrieving them from VSAC.  This
prevents the code service from having to make multiple calls to VSAC for the same value set.

The second argument to the `CodeService` constructor is a boolean indicating if the code service should begin by
loading existing value sets from the cache.  If true, it will initialize the code service from the cache (if the
cache exists and is populated).  If false, `ensureValueSets` will re-download any value sets passed to it, overwriting
the cache.

## Using UMLS Credentials

Downloading value set definitions from VSAC requires a valid UMLS account.  The code service's `ensureValueSets`
function allows a UMLS username and password to be passed in.  Alternately, the UMLS username and password can be
provided via `UMLS_USER_NAME` and `UMLS_PASSWORD` environment variables.

## Downloading Value Set Definitions

The `ensureValueSets` function is the only function that attempts to download value sets from VSAC.  Before it makes
a request to VSAC, it will check the cache.  If the value set is already in the cache, it will not make a request to
VSAC.  Otherwise, it will use VSAC's SVS2 API to download the expanded codes from the value set.

The `findValueSetsByOID` and `findValueSet` functions do not reach out to VSAC, so implementations should call
`ensureValueSets` with the value set OIDs / versions first, before attempting to execute CQL.  Usually an implementor
will extract the list of value set OIDs / versions from the ELM to pass them into `ensureValueSets`.

## Example

The following is a simple example of setting up the VSAC Code Service, calling `ensureValueSets`, and passing the
Code Service into the CQL Execution engine:

```js
const vsac = require('cql-exec-vsac');

// Code setting up the CQL library, patient source, parameters, etc
// ...

// Extract the value sets from the ELM
let valueSets = [];
const json = JSON.parse(fs.readFileSync('/path/to/cdsELM.json', 'utf8'));
if (json.library && json.library.valueSets && json.library.valueSets.def) {
  valueSets = json.library.valueSets.def;
}

// Set up the code service, loading from the cache if it exists
const codeService = new vsac.CodeService('/path/to/vsac_cache', true);
// Ensure value sets, downloading any missing value sets
codeService.ensureValueSets(valueSets, 'myUMLSUserName', 'myUMLSPassword')
.then(() => {
  // Value sets are loaded, so execute!
  const executor = new cql.Executor(lib, codeService, parameters);
  const results = executor.exec(patientSource);
  // Do something with results...
})
.catch( (err) => {
  // There was an error downloading the value sets!
  console.error('Error downloading value sets', err);
});
```

# Linting the Code

To encourage quality and consistency within the code base, all code should pass eslint without any warnings.  Many text editors can be configured to automatically flag eslint violations.  We also provide an npm script for running eslint on the project.  To run eslint, execute the following command:
```
$ yarn lint
```