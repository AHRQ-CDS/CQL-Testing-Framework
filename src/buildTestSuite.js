const fs = require('fs-extra');
const path = require('path');
const cql = require('cql-execution');
const fhir = require('cql-exec-fhir');
const {expect} = require('chai');

function buildTestSuite(testCases, library, codeService, options) {
  const identifier = library.source.library.identifier;
  const libraryHandle = `${identifier.id}_v${identifier.version}`;
  let executionDateTime;
  if (options && options.date != null && options.date.length > 0) {
    executionDateTime = cql.DateTime.parse(options.date);
  }
  let dumpPath;
  if (options.dumpFiles && options.dumpFiles.enabled) {
    dumpPath = path.join(options.dumpFiles.path, libraryHandle);
    fs.mkdirpSync(dumpPath);
  }
  const patientSource = fhir.PatientSource.FHIRv102();
  const executor = new cql.Executor(library, codeService);
  describe(libraryHandle, () => {
    before('Download value set definitions from VSAC if necessary', function(done) {
      this.timeout(30000);
      const vs = Object.keys(library.valuesets).map(key => library.valuesets[key]);
      let user, pass;
      if (options.vsac && options.vsac.user && options.vsac.user !== '') {
        user = options.vsac.user;
        pass = options.vsac.password;
      }
      codeService.ensureValueSets(vs, user, pass)
        .then(() => done())
        .catch((err) => {
          if (err instanceof Error) {
            done(err);
          } else if (err && err.indexOf('UMLS_USER_NAME') != null) {
            const message = 'Failed to download value sets. Please ensure VSAC user and password '
              + 'is specified via one of the appropriate mechanisms, either:\n'
              + '- configuration: options.vsac.user & options.vsac.password\n'
              + '- environment variables: UMLS_USER_NAME & UMLS_PASSWORD\n'
              + '- arguments (commandline only): --vsac-user & --vsac-password';
            done(new Error(message));
          } else {
            done(new Error(err));
          }
        });
    });

    afterEach('Reset the patient source', () => patientSource.reset());

    for (const testCase of testCases) {
      const testFunc = testCase.skip ? it.skip : testCase.only ? it.only : it;
      testFunc(testCase.name, () => {
        if (dumpPath) {
          const fileName = path.join(dumpPath, `${testCase.name.replace(/[\s/\\]/g, '_')}.json`);
          fs.writeFileSync(fileName, JSON.stringify(testCase.bundle, null, 2), 'utf8');
        }
        patientSource.loadBundles([testCase.bundle]);
        const results = executor.exec(patientSource, executionDateTime);
        if (dumpPath) {
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

module.exports = buildTestSuite;
