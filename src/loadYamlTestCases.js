const path = require('path');
const os = require('os');
const yaml = require('js-yaml');
const fs   = require('fs');
const TestCase = require('./testCase');
const yaml2fhir = require('./yaml2fhir');

function loadYamlTestCases(yamlPath, fhirVersion) {
  return recursiveLoadYamlTestCases(yamlPath, fhirVersion, []);
}

function deepCopy(anObject) {
  if (!anObject) {
    return anObject;
  }

  let tmp;
  let anotherObject = Array.isArray(anObject) ? [] : {};
  for (const k in anObject) {
    tmp = anObject[k];
    anotherObject[k] = (typeof tmp === 'object') ? deepCopy(tmp) : tmp;
  }

  return anotherObject;
}

function recursiveLoadYamlTestCases(yamlPath, fhirVersion, testCases = []) {
  const stat = fs.statSync(yamlPath);
  if (stat.isDirectory()) {
    for (const fileName of fs.readdirSync(yamlPath)) {
      const file = path.join(yamlPath, fileName);
      recursiveLoadYamlTestCases(file, fhirVersion, testCases);
    }
  } else if (stat.isFile() && (yamlPath.endsWith('.yaml') || yamlPath.endsWith('.yml'))) {
    testCases.push(...yamlToTestCases(yamlPath, fhirVersion));
  }
  return testCases;
}

function yamlToTestCases(yamlFilePath, fhirVersion) {
  // Get document as a string
  let docString = fs.readFileSync(yamlFilePath, 'utf8');
  // Look for any referenced external data files
  let matches = docString.match(/externalData:\s*(\[?-?\s*\w*\s*,?\]?)+/);
  matches = matches ? matches[0] : null;
  let extDataFiles = [''];
  if (matches) {
    let matchNames = matches.split('[');
    if (matchNames.length == 1) { // There are no square brackets
      // This must be a block style array.
      extDataFiles = matchNames[0].match(/(-\s*\w*)+/g);
      extDataFiles = extDataFiles.map(file => file.replace(/-\s*/,''));
    } else { // There are square brackets
      // This must be a flow style array
      matchNames = matchNames[1].split(']')[0];
      extDataFiles = matchNames.split(',');
      extDataFiles = extDataFiles.map( file => file.trim());
    }
    extDataFiles = extDataFiles.map(file => !file.match(/$.ya?ml/) ? file.concat('.yml') : file);
    let dirName = path.dirname(yamlFilePath);
    extDataFiles = extDataFiles.map(file => file = path.join(dirName, file));
    // Loop over external data files and try to splice them into the document
    extDataFiles.forEach( lib => {
      if (fs.existsSync(lib)) {
        let lastDirectiveIndex = docString.indexOf('---') + 3;
        docString = docString.slice(0,lastDirectiveIndex) + os.EOL + fs.readFileSync(lib, 'utf8') + os.EOL + docString.slice(lastDirectiveIndex+1);
      }
      else throw new Error(`Could not find YAML external data file: ${lib}`);
    });
  }

  // Try to load the document
  const doc = yaml.load(docString);
  if (!doc.name) {
    if (!doc.data && !doc.results) {
      // eslint-disable-next-line no-console
      console.log(`Ignoring potential external data file: ${yamlFilePath}`);
      return [];
    }
    else throw new Error(`Every test case must specify its 'name'`);
  }
  const testName = doc.name;
  if (doc.skip) {
    return new TestCase(testName, null, null, true);
  }

  // Handle the data

  try {
    // Note that bundles is always an array
    let bundles = [{
      resourceType: 'Bundle',
      id: testName,
      type: 'collection',
      entry: []
    }];
    const addResource = (resource) => bundles.forEach(bun => bun.entry.push({ resource }));
    const addIterateResource = function(resource) {
      // Copy over bundles array
      let iterates = deepCopy(bundles);

      // Add resource to each copied bundles
      iterates.forEach(function(iter) {
        iter.entry.push( {resource} );
      });

      // Return the copy
      return iterates;
    };

    if (!doc.data) {
      console.warn(`${testName}: No data elements found.`);
      doc.data = [];
    }

    // Handle the patient
    if (doc.data.length === 0 || doc.data[0].resourceType !== 'Patient') {
      console.warn(`${testName}: First element was not a patient.  Inserting a patient element.`);
      doc.data = doc.data.unshift({ resourceType: 'Patient' });
    }

    const p = yaml2fhir(doc.data[0], null, fhirVersion);
    addResource(p);

    for (let i = 1; i < doc.data.length; i++) {
      const d = doc.data[i];

      if (d.$import != undefined) {
        // Add all resources under the `$import` property.
        d.$import.forEach( element => {
          if (!element.resourceType) {
            throw new Error(`Every data element must specify its 'resourceType'`);
          }
          addResource(yaml2fhir(element, p.id, fhirVersion));
        });
      } else if (d.$iterate != undefined) {
        // For each resource under the `$iterate` property, replicate the existing
        // bundles and add the resources, one to each copy.
        let iterateArray = [];
        d.$iterate.forEach( element => {
          if (!element.resourceType) {
            throw new Error(`Every data element must specify its 'resourceType'`);
          }
          // Get a copy of the existing bundles and add the element to them.
          const iterate = addIterateResource(yaml2fhir(element, p.id, fhirVersion));
          // Each resource element is added to only one of the copies
          Array.prototype.push.apply(iterateArray,iterate);
        });
        // Reset bundles to point at our expanded copy.
        bundles = iterateArray;
      } else {
        if (!d.resourceType) {
          throw new Error(`Every data element must specify its 'resourceType'`);
        }
        addResource(yaml2fhir(d, p.id, fhirVersion));
      }
    }

    if (doc.results == null) {
      console.warn(`${testName}: No results specified.`);
      doc.results = {};
    }
    let returnedTestCases = [];
    for (let i = 0; i < bundles.length; i++) {
      let iterateTestName = testName + (i > 0 ? ` (${i})` : '');
      returnedTestCases.push(
        new TestCase(iterateTestName, bundles[i], doc.results, false, doc.only)
      );
    }
    return returnedTestCases;
  } catch (e) {
    throw new Error(`${testName}: ${e.message}`);
  }
}

module.exports = loadYamlTestCases;