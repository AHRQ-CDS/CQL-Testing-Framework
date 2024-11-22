const { expect } = require('chai');
const fs = require('fs');
const path = require('path');
const LibraryCoverageReporter = require('../src/exporters/coverage');

describe('LibraryCoverageReporter', () => {
  describe('initCoverageReport', function() {
    it('should initialize the coverage report with the correct library and paths', function() {
      // Read the librarySource from the JSON file
      const librarySourcePath = path.join(__dirname, 'yaml', 'other', 'cql', 'OtherFHIRv401Test.json');
      const librarySource = JSON.parse(fs.readFileSync(librarySourcePath, 'utf8'));
  
      const libraryPaths = ['path1', 'path2'];
  
      const partialExpectedOutput = {
        library: {
          id: 'OtherFHIRv401Test',
          version: '0.0.1',
        },
        paths: ['path1', 'path2']
      };
  
      const result = LibraryCoverageReporter.initCoverageReport(librarySource.library, libraryPaths);
  
      // Use include to partially match the expected output
      expect(result).to.deep.include(partialExpectedOutput, 'includes the correct library and paths');
  
      // Additional checks for expressions and covered
      expect(result.expressions).to.include.keys(['216', '217']);
      expect(result.covered).to.include.keys(['216', '217']);
      expect(result.covered).to.deep.include({ 216: 0, 217: 0 });
    });
  });

  describe('writeReport', () => {
    it('should write Istanbul HTML report', () => {
      const coverageData = {
        path: 'test/yaml/other/cql/OtherFHIRv401Test.cql',
        statementMap: {
          '0': {
            start: { line: 2, column: 0 },
            end: { line: 2, column: 29 }
          },
          '1': {
            start: { line: 3, column: 0 },
            end: { line: 3, column: 47 }
          },
          '2': {
            start: { line: 5, column: 0 },
            end: { line: 5, column: 47 }
          }          
        },
        fnMap: {},
        branchMap: {},
        s: {
          '0': 0,
          '1': 0,
          '2': 0
        },
        f: {},
        b: {}
      };

      LibraryCoverageReporter.writeReport([coverageData], 'coverage');
    });
  });

  describe('parseExpressonLocator', function() {
    it('should correctly parse various locator formats', function() {
      const originalObject = {
        key1: { locator: '1:5-2:10' },  // Line and column
        key2: { locator: '3-4' },      // Line only
        key3: { locator: '5:8' },      // Start line and column only
        key4: { locator: '6' },        // Start line only
        key5: { noLocator: 'value' },  // No locator
        key6: { locator: '7:2-8:3' },  // Multiple keys with locators
        key7: { locator: '9:4-10:5' }
      };
  
      const expectedOutput = {
        key1: {
          start: { line: 1, column: 4 },
          end: { line: 2, column: 9 }
        },
        key2: {
          start: { line: 3, column: 0 },
          end: { line: 4, column: 0 }
        },
        key3: {
          start: { line: 5, column: 7 },
          end: { line: 5, column: 7 }
        },
        key4: {
          start: { line: 6, column: 0 },
          end: { line: 6, column: 0 }
        },
        // key5 is not included in expectedOutput as it has no locator
        key6: {
          start: { line: 7, column: 1 },
          end: { line: 8, column: 2 }
        },
        key7: {
          start: { line: 9, column: 3 },
          end: { line: 10, column: 4 }
        }
      };
  
      const result = LibraryCoverageReporter.parseExpressonLocator(originalObject);
      expect(result).to.deep.equal(expectedOutput, 'correctly parses various locator formats');
    });
  });  
});