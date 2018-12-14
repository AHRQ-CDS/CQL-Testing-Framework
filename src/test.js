const loadConfig = require('./loadConfig');
const loadLibrary = require('./loadLibrary');
const loadYamlTestCases = require('./loadYamlTestCases');
const loadCodeService = require('./loadCodeService');
const buildTestSuite = require('./buildTestSuite');


function test(configPath) {
  const config = loadConfig(configPath);
  const library = loadLibrary(config.get('library.name'), config.get('library.paths'));
  const testCases = loadYamlTestCases(config.get('tests.path'));
  const codeService = loadCodeService(config.get('options.vsac.cache'));
  buildTestSuite(testCases, library, codeService, config.get('options'));
}

module.exports = test;