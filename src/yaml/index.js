const fs = require('fs-extra');
const path = require('path');
const cs = require('cql-exec-vsac');
const cql = require('cql-execution');
const fhir = require('cql-exec-fhir');
const {expect} = require('chai');

// Set these to true to dump out files for easier debugging
const DUMP_PATIENTS = false;
const DUMP_RESULTS = false;

function testSuite(library, testCases, executionDateTimeString) {
  const identifier = library.source.library.identifier;
  const libraryHandle = `${identifier.id}_v${identifier.version}`;
  let executionDateTime;
  if (executionDateTimeString != null && executionDateTimeString.length > 0) {
    executionDateTime = cql.DateTime.parse(executionDateTimeString);
  }
  let dumpPath;
  if (DUMP_PATIENTS || DUMP_RESULTS) {
    dumpPath = path.join('test_dump', libraryHandle);
    fs.mkdirpSync(dumpPath);
  }
  const codeService = loadCodeService();
  const patientSource = fhir.PatientSource.FHIRv102();
  const executor = new cql.Executor(library, codeService);
  describe(libraryHandle, () => {
    before('Download value set definitions from VSAC if necessary', function(done) {
      this.timeout(30000);
      ensureValueSets(codeService, library, done);
    });

    afterEach('Reset the patient source', () => patientSource.reset());

    for (const testCase of testCases) {
      const testFunc = testCase.skip ? it.skip : testCase.only ? it.only : it;
      testFunc(testCase.name, () => {
        if (DUMP_PATIENTS) {
          const fileName = path.join(dumpPath, `${testCase.name.replace(/[\s/\\]/g, '_')}.json`);
          fs.writeFileSync(fileName, JSON.stringify(testCase.bundle, null, 2), 'utf8');
        }
        patientSource.loadBundles([testCase.bundle]);
        const results = executor.exec(patientSource, executionDateTime);
        if (DUMP_RESULTS) {
          const fileName = path.join(dumpPath, `${testCase.name.replace(/[\s/\\]/g, '_')}_RESULTS.json`);
          fs.writeFileSync(fileName, JSON.stringify(results, null, 2), 'utf8');
        }
        const patientId = testCase.bundle.entry[0].resource.id;
        expect(results.patientResults[patientId]).to.exist;
        for (const expr of Object.keys(testCase.expected)) {
          checkResult(expr, results.patientResults[patientId][expr], testCase.expected[expr]);
        }
      });
    }
  });
}

function checkResult(expr, actual, expected) {
  const simpleResult = simplifyResult(actual);
  const message = `${expr}=<${simpleResult}>`;
  // If it fell through to here, just do a normal equals assertion
  expect(simpleResult, message).to.eql(expected);
}

function simplifyResult(result) {
  if (result == null) {
    return result;
  } else if (Array.isArray(result)) {
    return result.map(r => simplifyResult(r));
  } else if (result instanceof cql.DateTime || result.constructor.name === 'DateTime') {
    return result.toString();
  } else if (result != null && typeof result === 'object') {
    for (const key of Object.keys(result)) {
      result[key] = simplifyResult(result[key]);
    }
  }
  return result;
}

// function loadLibrary(pathToLibrary) {
//   const elmFile = require(pathToLibrary);
//   const libraries = {};
//   // Look in the CQL file's folder for other libraries to include
//   for (const fileName of fs.readdirSync(path.dirname(pathToLibrary))) {
//     const file = path.join(path.dirname(pathToLibrary), fileName);
//     if (!file.endsWith('.json') || file == pathToLibrary) {
//       continue;
//     }
//     const json = require(file);
//     if (json && json.library && json.library.identifier && json.library.identifier.id) {
//       libraries[json.library.identifier.id] = json;
//     }
//   }
//   return new cql.Library(elmFile, new cql.Repository(libraries));
// }

function loadCodeService() {
  const codeservice = new cs.CodeService(path.join(__dirname, 'vscache'));
  codeservice.loadValueSetsFromFile(path.join(__dirname, 'vscache', 'valueset-db.json'));
  return codeservice;
}

function ensureValueSets(codeService, library, done) {
  // If the library has valuesets, crosscheck them with the local codeservice. Any valuesets not found in the local
  // cache will be downloaded from VSAC.
  let valuesetArray = Object.keys(library.valuesets).map(function(idx) {return library.valuesets[idx];});
  if (valuesetArray !== null) { // We have some valuesets... get them.
    codeService.ensureValueSets(valuesetArray)
      .then( () => done() )
      .catch( (err) => {
        done(err);
      });
  } else { // No valuesets. Go to next handler.
    done();
  }
}

module.exports = { testSuite };
