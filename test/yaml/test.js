const path = require('path');
const yaml = require('../../src').yaml;

describe('YAML Test Cases', () => {
  const elmPath = path.resolve(__dirname, './cql/Factors_to_Consider_in_Managing_Chronic_Pain.json');
  const yamlPath = path.resolve(__dirname, './fixtures');
  yaml(elmPath, yamlPath, '2018-12-10T00:00:00.0Z');
});