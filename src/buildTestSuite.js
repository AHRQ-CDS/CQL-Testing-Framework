const fs = require('fs-extra');
const path = require('path');
const cql = require('cql-execution');
const fhir = require('cql-exec-fhir');
const uuidv4 = require('uuid/v4');
const {expect} = require('chai');
const postman = require('./exporters/postman');

function buildTestSuite(testCases, library, codeService, fhirVersion, config) {
  const identifier = library.source.library.identifier;
  const libraryHandle = `${identifier.id}_v${identifier.version}`;
  const hooks = config.get('hooks');
  const options = config.get('options');
  let executionDateTime;
  if (options && options.date != null && options.date.length > 0) {
    executionDateTime = cql.DateTime.parse(options.date);
  }
  let dumpBundlesPath, dumpResultsPath, dumpHooksPath, dumpPostmanPath, resourceTypes;
  if (options.dumpFiles && options.dumpFiles.enabled) {
    const dumpPath = path.join(options.dumpFiles.path, libraryHandle);
    dumpBundlesPath = path.join(dumpPath, 'bundles');
    fs.mkdirpSync(path.join(dumpBundlesPath));
    dumpResultsPath = path.join(dumpPath, 'results');
    fs.mkdirpSync(path.join(dumpResultsPath));
    dumpHooksPath = path.join(dumpPath, 'hooks-requests');
    fs.mkdirpSync(path.join(dumpHooksPath));
    // Only dump the postman collections if we have at least one hookId
    if (hooks.length > 0) {
      dumpPostmanPath = path.join(dumpPath, 'postman');
      fs.mkdirpSync(path.join(dumpPostmanPath));
    }
    resourceTypes = extractResourceTypesFromLibrary(library);
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

    let postmanCollection;
    if (dumpPostmanPath) {
      before('Initialize Postman Collection', () => {
        postmanCollection = postman.initPostmanCollection(libraryHandle, hooks);
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
          const hooksRequest = createHooksRequest(testCase.bundle, resourceTypes);
          if (dumpHooksPath) {
            const filePath = path.join(dumpHooksPath, dumpFileName);
            fs.writeFileSync(filePath, JSON.stringify(hooksRequest, null, 2), 'utf8');
          }
          if (dumpPostmanPath) {
            postman.addHooksRequest(testCase.name, hooksRequest, hooks, postmanCollection);
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

function createHooksRequest(bundle, resourceTypes) {
  // Clone it so we don't unintentionall mess it up
  bundle = JSON.parse(JSON.stringify(bundle));

  const request = {
    hookInstance: uuidv4(),
    hook: 'patient-view',
    user: 'Practitioner/example',
    context: {},
    prefetch: {}
  };

  // First add all of the test data from the bundle
  for (const entry of bundle.entry) {
    if (entry.resource == null) {
      continue;
    }
    const type = entry.resource.resourceType;
    if (type === 'Patient') {
      request.context.patientId = entry.resource.id;
      request.prefetch['Patient'] = entry.resource;
    } else {
      if (resourceTypes.includes(type)) {
        if (request.prefetch[type] == null) {
          request.prefetch[type] = {
            resourceType: 'Bundle',
            type: 'searchset',
            entry: []
          };
        }
        request.prefetch[type].entry.push({ resource: entry.resource });
      }
    }
  }

  // Next add any missing prefetch queries (based on resource types used in ELM)
  for (const type of resourceTypes) {
    if (request.prefetch[type] == null) {
      request.prefetch[type] = {
        resourceType: 'Bundle',
        type: 'searchset',
        entry: []
      };
    }
  }

  return request;
}

// NOTE: The following functions follow the basic pattern used by cql-services to extract prefetch queries from ELM

function extractResourceTypesFromLibrary(library) {
  const types = new Set();
  if (library && library.source && library.source.library && library.source.library.statements && library.source.library.statements.def) {
    for (const expDef of Object.values(library.source.library.statements.def)) {
      extractResourceTypesFromExpression(types, expDef.expression);
    }
  }
  return Array.from(types);
}

function extractResourceTypesFromExpression(types, expression) {
  if (expression && Array.isArray(expression)) {
    expression.forEach(e => extractResourceTypesFromExpression(types, e));
  } else if (expression && typeof expression === 'object') {
    if (expression.type === 'Retrieve') {
      const match = /^(\{http:\/\/hl7.org\/fhir\})?([A-Z][a-zA-Z]+)$/.exec(expression.dataType);
      if (match) {
        types.add(match[2]);
      }
    } else {
      for (const val of Object.values(expression)) {
        extractResourceTypesFromExpression(types, val);
      }
    }
  }
}

module.exports = buildTestSuite;
