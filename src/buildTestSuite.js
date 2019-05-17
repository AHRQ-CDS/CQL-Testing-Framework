const fs = require('fs-extra');
const path = require('path');
const cql = require('cql-execution');
const fhir = require('cql-exec-fhir');
const {expect} = require('chai');
const hooksExporter = require('./exporters/hooks');
const postmanExporter = require('./exporters/postman');

function buildTestSuite(testCases, library, codeService, fhirVersion, config) {
  const identifier = library.source.library.identifier;
  const libraryHandle = `${identifier.id}_v${identifier.version}`;
  const options = config.get('options');
  let executionDateTime;
  if (options && options.date != null && options.date.length > 0) {
    executionDateTime = cql.DateTime.parse(options.date);
  }
  let dumpBundlesPath, dumpResultsPath, dumpHooksPath, dumpPostmanPath, prefetchKeys;
  if (options.dumpFiles && options.dumpFiles.enabled) {
    const dumpPath = path.join(options.dumpFiles.path, libraryHandle);
    dumpBundlesPath = path.join(dumpPath, 'bundles');
    fs.mkdirpSync(path.join(dumpBundlesPath));
    dumpResultsPath = path.join(dumpPath, 'results');
    fs.mkdirpSync(path.join(dumpResultsPath));
    dumpHooksPath = path.join(dumpPath, 'hooks-requests');
    fs.mkdirpSync(path.join(dumpHooksPath));
    // Only dump the postman collections if we have at least one hookId
    if (config.get('hook.id') !== '') {
      dumpPostmanPath = path.join(dumpPath, 'postman');
      fs.mkdirpSync(path.join(dumpPostmanPath));
    }
    prefetchKeys = hooksExporter.extractPrefetchKeys(library);
  }
  const executor = new cql.Executor(library, codeService);
  describe(libraryHandle, () => {
    let patientSource;
    before('Initialize FHIR patient source', () => {
      switch (fhirVersion) {
      case '1.0.2': patientSource = fhir.PatientSource.FHIRv102(); break;
      case '3.0.0': patientSource = fhir.PatientSource.FHIRv300(); break;
      // no default
      }
      if (patientSource == null) {
        expect.fail('Failed to initialize FHIR patient source.  Only FHIR 1.0.2 or 3.0.0 are supported.');
      }
    });

    before('Download value set definitions from VSAC if necessary', function(done) {
      this.timeout(30000);
      let user, pass;
      if (options.vsac && options.vsac.user && options.vsac.user !== '') {
        user = options.vsac.user;
        pass = options.vsac.password;
      }
      codeService.ensureValueSetsInLibrary(library, true, user, pass)
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

    let postmanCollection;
    if (dumpPostmanPath) {
      before('Initialize Postman Collection', () => {
        postmanCollection = postmanExporter.initPostmanCollection(libraryHandle);
      });

      after('Dump Postman Collection', () => {
        const filePath = path.join(dumpPostmanPath, `${libraryHandle.replace(/[\s./\\]/g, '_')}.postman_collection.json`);
        fs.writeFileSync(filePath, JSON.stringify(postmanCollection, null, 2), 'utf8');
      });
    }

    afterEach('Reset the patient source', () => patientSource.reset());

    for (const testCase of testCases) {
      const testFunc = testCase.skip ? it.skip : testCase.only ? it.only : it;
      testFunc(testCase.name, () => {
        const dumpFileName = `${testCase.name.replace(/[\s/\\]/g, '_')}.json`;
        if (dumpBundlesPath) {
          const filePath = path.join(dumpBundlesPath, dumpFileName);
          fs.writeFileSync(filePath, JSON.stringify(testCase.bundle, null, 2), 'utf8');
        }
        if (dumpHooksPath || dumpPostmanPath) {
          const hooksRequest = hooksExporter.createHooksRequest(testCase.bundle, prefetchKeys);
          if (dumpHooksPath) {
            const filePath = path.join(dumpHooksPath, dumpFileName);
            fs.writeFileSync(filePath, JSON.stringify(hooksRequest, null, 2), 'utf8');
          }
          if (dumpPostmanPath) {
            postmanExporter.addHooksRequest(testCase, hooksRequest, config.get('hook'), postmanCollection);
          }
        }
        patientSource.loadBundles([testCase.bundle]);
        const results = executor.exec(patientSource, executionDateTime);
        if (dumpResultsPath) {
          const filePath = path.join(dumpResultsPath, dumpFileName);
          fs.writeFileSync(filePath, JSON.stringify(results, null, 2), 'utf8');
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
