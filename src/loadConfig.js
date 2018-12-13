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
        default: path.join(dir, 'fixtures', 'cql'),
        env: 'CQLT_LIBRARY_PATHS',
        arg: 'library-paths',
        coerce: (val) => val.split(',')
      },
    },
    tests: {
      path: {
        doc: 'The file path containing the test case files',
        format: 'String',
        default: path.join(dir, 'fixtures', 'tests'),
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
      valueSetCache: {
        path: {
          doc: 'The file path for the value set cache',
          format: 'String',
          default: path.join(dir, 'vscache'),
          env: 'CQLT_VS_CACHE_PATH',
          arg: 'vs-cache-path'
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