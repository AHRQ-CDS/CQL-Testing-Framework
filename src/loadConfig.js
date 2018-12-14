const convict = require('convict');
const fs = require('fs');
const path = require('path');
const process = require('process');
const yaml = require('js-yaml');
const { DateTime } = require('cql-execution');

convict.addParser([
  { extension: 'json', parse: JSON.parse },
  { extension: ['yml', 'yaml'], parse: yaml.safeLoad }
]);

// Define the schema
function newConfig(dir) {
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
        default: path.join(dir, 'cql'),
        env: 'CQLT_LIBRARY_PATHS',
        arg: 'library-paths',
        coerce: (val) => val.split(',')
      },
    },
    tests: {
      path: {
        doc: 'The file path containing the test case files',
        format: 'String',
        default: path.join(dir, 'tests'),
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
        user: {
          doc: 'The UMLS user name to use when connecting to the VSAC',
          format: 'String',
          default: '',
          env: 'UMLS_USER_NAME', // NOTE: Inconsistent name to match existing ENV name used by cql-exec-vsac
          arg: 'vsac-user'
        },
        password: {
          doc: 'The UMLS password to use when connecting to the VSAC',
          format: 'String',
          default: '',
          sensitive: true,
          env: 'UMLS_PASSWORD', // NOTE: Inconsistent name to match existing ENV name used by cql-exec-vsac
          arg: 'vsac-password'
        },
        cache: {
          doc: 'The file path for the value set cache',
          format: 'String',
          default: path.join(dir, '.vscache'),
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
          default: path.join(dir, 'dump_files'),
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
  return config;
}

module.exports = loadConfig;
