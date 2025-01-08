const buildTestSuite = require('../src/buildTestSuite');
const loadConfig = require('../src/loadConfig');
const sinon = require('sinon');
const { expect } = require('chai');
const path = require('path');

// Mock library and other dependencies
const mockLibrary = {
  source: {
    library: {
      identifier: {
        id: 'test',
        version: '1.0'
      }
    }
  }
};

describe('buildTestSuite', () => {
  it('should use describe.skip when config.skip is true', () => {
    const configPath = path.join(__dirname, 'config-skip.yaml');
    const config = loadConfig(configPath);

    const describeSpy = sinon.spy(global, 'describe');
    const describeSkipSpy = sinon.spy(global.describe, 'skip');

    buildTestSuite([], mockLibrary, null, null, config);

    expect(describeSpy.called).to.be.false;
    expect(describeSkipSpy.calledOnce).to.be.true;
    expect(describeSkipSpy.calledWith('test_v1.0')).to.be.true;

    describeSpy.restore();
    describeSkipSpy.restore();
  });

  it('should use describe.only when config.only is true', () => {
    const configPath = path.join(__dirname, 'config-only.yaml');
    const config = loadConfig(configPath);

    const describeSpy = sinon.spy(global, 'describe');
    const describeOnlySpy = sinon.spy(global.describe, 'only');

    buildTestSuite([], mockLibrary, null, null, config);

    expect(describeSpy.called).to.be.false;
    expect(describeOnlySpy.calledOnce).to.be.true;
    expect(describeOnlySpy.calledWith('test_v1.0')).to.be.true;

    describeSpy.restore();
    describeOnlySpy.restore();
  });
});
