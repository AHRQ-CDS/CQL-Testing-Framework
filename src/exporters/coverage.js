const Mocha = require('mocha');
const path = require('path');
const libReport = require('istanbul-lib-report');
const createMap = require('istanbul-lib-coverage').createCoverageMap;
const reports = require('istanbul-reports');

class LibraryCoverageReporter extends Mocha.reporters.Base {
  constructor(runner) {
    super(runner);

    let coverageReport = null;
    const coverageReports = [];

    runner.on(Mocha.Runner.constants.EVENT_SUITE_BEGIN, (suite) => {
      coverageReport = null;
      suite.on('initCoverageReport', (library) => {
        if (library) {
          coverageReport = LibraryCoverageReporter.initCoverageReport(library.source, library.paths);
          coverageReports.push(coverageReport);
        }
      });
    });

    runner.on(Mocha.Runner.constants.EVENT_TEST_BEGIN, (test) => {
      if (coverageReport) {
        test.on('addLocalIdResultMap', (localIdResultsMap) => {
          LibraryCoverageReporter.addLocalIdResultMap(localIdResultsMap, coverageReport);
        });
      }
    });

    runner.on(Mocha.Runner.constants.EVENT_RUN_END, () => {
      const coverage = [];
      for (const coverageReport of coverageReports) {
        if (coverageReport.paths == null || coverageReport.paths.length > 1) {
          console.error('Library paths must be set to a single path');
        }
        const coverageData = {
          path: path.join(coverageReport.paths[0], `${coverageReport.library.id}.cql`),
          statementMap: LibraryCoverageReporter.parseExpressonLocator(coverageReport.expressions),
          fnMap: {},
          branchMap: {},
          s: coverageReport.covered,
          f: {},
          b: {}
        };
        coverage.push(coverageData);
      }
      LibraryCoverageReporter.writeReport(coverage, 'coverage');
    });
  }

  static parseExpressonLocator(originalObject) {
    const parsedObject = {};

    for (const key in originalObject) {
      if (originalObject[key].locator) {
        const locator = originalObject[key].locator;
        const [start, end] = locator.split('-');
        const [startLine, startColumn] = start.includes(':') ? 
          start.split(':').map(Number) : [Number(start), 0];
        const [endLine, endColumn] = end !== undefined ?
          (end.includes(':') ? end.split(':').map(Number) : [Number(end), 0])
          : [startLine, startColumn];

        parsedObject[key] = {
          start: { line: startLine, column: startColumn > 0 ? startColumn - 1 : startColumn },
          end: { line: endLine, column: endColumn > 0 ? endColumn - 1 : endColumn }
        };
      }
    }

    return parsedObject;
  }

  static writeReport(coverage, coveragePath) {
    const coverageMap = createMap({});
    for (const coverageData of coverage) {
      coverageMap.addFileCoverage(coverageData);
    }

    // create a context for report generation
    const context = libReport.createContext({
      dir: `${coveragePath}`,
      // The summarizer to default to (may be overridden by some reports)
      // values can be nested/flat/pkg. Defaults to 'pkg'
      defaultSummarizer: 'nested',
      coverageMap
    });

    // create an instance of the relevant report class, passing the
    // report name e.g. json/html/html-spa/text
    const report = reports.create('lcov', {});

    // call execute to synchronously create and write the report to disk
    report.execute(context);
  }

  static initCoverageReport(librarySource, libraryPaths) {
    const coverageReport = {
      library: librarySource.identifier,
      paths: libraryPaths
    };
    coverageReport.expressions = this.extractLocalIdData(librarySource.statements.def);
    coverageReport.covered = Object.keys(coverageReport.expressions).reduce((acc, key) => {
      acc[key] = 0;
      return acc;
    }, {});
    return coverageReport;
  }

  static extractLocalIdData(jsonArray) {
    const resultObject = {};

    function recursiveSearch(obj) {
      if (typeof obj !== 'object' || obj === null) {
        return;
      }

      // Check if the current object has a 'localId' property
      if (obj['localId']) {
        const localId = obj.localId;
        const extractedData = {};

        // Iterate over the properties of the object
        for (const key in obj) {
          const value = obj[key];
          // Check if the value is a literal (not an object or array)
          if (value !== null && typeof value !== 'object') {
            extractedData[key] = value;
          }
        }

        // Check if 'locator' and 'type' is not null in the extracted data
        // Skip types that don't require unit testing - alias, as, type specifiers, literals and property extractors
        if (extractedData.locator !== undefined && extractedData.type !== undefined &&
          extractedData.alias === undefined &&
          (extractedData.type !== 'As' && !extractedData.type.includes('TypeSpecifier') && extractedData.type !== 'Literal' && extractedData.type !== 'Property')
        ) {
          resultObject[localId] = extractedData;
        }
      }

      // Recursively search through all properties of the object, skipping signature and resultTypeSpecifier
      for (const key in obj) {
        if (typeof obj[key] === 'object' && key !== 'signature' && key !== 'resultTypeSpecifier') {
          recursiveSearch(obj[key]);
        }
      }
    }

    // Iterate over each JSON object in the array
    jsonArray.forEach(jsonObject => {
      recursiveSearch(jsonObject);
    });

    return resultObject;
  }

  static addLocalIdResultMap(localIdResultMap, coverageReport) {
    if (localIdResultMap == null) { return; }
    // Iterate over each key in the results map
    for (const localId in localIdResultMap[coverageReport.library.id]) {
      // Check if the key exists in the expressions map
      if (coverageReport.expressions[localId]) {
        coverageReport.covered[localId] += 1;
      }
    }
  }
}

module.exports = LibraryCoverageReporter;