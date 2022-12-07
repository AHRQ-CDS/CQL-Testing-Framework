const convict = require('convict');
const fs = require('fs');
const path = require('path');
const process = require('process');
const yaml = require('js-yaml');
const { DateTime } = require('cql-execution');

convict.addParser([
  { extension: 'json', parse: JSON.parse },
  { extension: ['yml', 'yaml'], parse: yaml.load }
]);

// Define the schema
function newConfig() {
  return convict({
    library: {
      name: {
        doc: 'The name of the CQL library to test',
        format: 'String',
        default: '',
        env: 'CQLT_LIBRARY',
        arg: 'library'
      },
      version: {
        doc: 'The version of the CQL library to test (latest, if not specified)',
        format: 'String',
        default: '',
        env: 'CQLT_LIBRARY_VERSION',
        arg: 'library-version'
      },
      paths: {
        doc: 'The path(s) at which the library and its dependencies can be found (files or folders)',
        format: 'Array',
        default: 'cql',
        env: 'CQLT_LIBRARY_PATHS',
        arg: 'library-paths'
      },
    },
    hook: {
      id: {
        doc: 'The hook id corresponding to the library (needed only for exporting Postman collections)',
        format: 'String',
        default: '',
        env: 'CQLT_HOOK_ID',
        arg: 'hook-id'
      },
      pmTestGenSupport: {
        doc: 'The path to a Node module that supports Postman test generation',
        format: 'String',
        default: '',
        env: 'CQLT_HOOK_PM_TEST_GEN_SUPPORT',
        arg: 'hook-pm-test-gen-support'
      }
    },
    tests: {
      path: {
        doc: 'The file path containing the test case files',
        format: 'String',
        default: 'tests',
        env: 'CQLT_TESTS_PATH',
        arg: 'tests-path'
      }
    },
    options: {
      date: {
        doc: 'The execution date to use as "Now()" when CQL executes tests (ISO 8601 format)',
        format: (val) => {
          if (typeof val !== 'string' || DateTime.parse(val) == null) {
            throw new Error('must be an ISO 8601 compliant date or date/time string');
          }
        },
        default: new Date().toISOString(),
        env: 'CQLT_DATE',
        arg: 'date'
      },
      vsac: {
        apikey: {
          doc: 'The UMLS API Key to use when connecting to the VSAC',
          format: 'String',
          default: '',
          sensitive: true,
          env: 'UMLS_API_KEY', // NOTE: Inconsistent name to match existing ENV name used by cql-exec-vsac
          arg: 'vsac-apikey'
        },
        cache: {
          doc: 'The file path for the value set cache',
          format: 'String',
          default: '.vscache',
          env: 'CQLT_VS_CACHE_PATH',
          arg: 'vsac-cache'
        }
      },
      dumpFiles: {
        enabled: {
          doc: 'Indicates if test data and actual results should be dumped to files (for debugging)',
          format: 'Boolean',
          default: false,
          env: 'CQLT_DUMP',
          arg: 'dump'
        },
        path: {
          doc: 'The file path to dump files to (if enabled)',
          format: 'String',
          default: 'dump_files',
          env: 'CQLT_DUMP_PATH',
          arg: 'dump-path'
        }
      }
    },
  });
}

function loadConfig(configPath) {
  let config;
  if (configPath) {
    if (!fs.existsSync(configPath)) {
      throw new Error(`Not a valid path to a config file: ${configPath}`);
    }
    config = newConfig(path.dirname(configPath));
    config.loadFile(configPath);
  } else {
    config = newConfig(process.cwd());
  }
  config.validate({ allowed: 'strict' });
  resolvePathsToConfigFile(configPath, config);
  return config;
}

function resolvePathsToConfigFile(configPath, config) {
  const resolvePath = (thePath) => {
    if (path.isAbsolute(thePath)) {
      return thePath;
    }
    return path.resolve(path.dirname(configPath), thePath);
  };
  ['tests.path', 'hook.pmTestGenSupport', 'options.vsac.cache', 'options.dumpFiles.path'].forEach((key) => {
    if (config.get(key) != '') {
      config.set(key, resolvePath(config.get(key)));
    }
  });
  config.set('library.paths', config.get('library.paths').map(resolvePath));
}

module.exports = loadConfig;
