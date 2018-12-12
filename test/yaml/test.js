const path = require('path');
const cqlt = require('../../src');

const library = cqlt.loadLibrary('Factors_to_Consider_in_Managing_Chronic_Pain', [path.resolve(__dirname, './cql')]);
const testCases = cqlt.loadYamlTestCases(path.resolve(__dirname, './fixtures'));
cqlt.yaml.testSuite(library, testCases, '2018-12-10T00:00:00.0Z');
