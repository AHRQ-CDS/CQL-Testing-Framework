const {Code, ValueSet} = require('cql-execution');
const fs = require('fs');
const proc = require('process');
const env = proc.env;
const path = require('path');
const {downloadFromVSAC} = require('./download-vsac');

/**
 * Constructs a code service with functions for downloading codes from the National Library of Medicine's
 * Value Set Authority Center.
 * @param {string} vsacCache - path to a folder in which to cache VSAC XML responses and the JSON value set DB
 * @param {boolean=false} loadFromCache - if true, and the cache exists, will initialize itself with the JSON DB
 */
class CodeService {
  constructor(vsacCache, loadFromCache = false) {
    // Initialize the local in-memory "database"
    this.valueSets = {}; // This will just be an object of objects.

    // Local folder for storing valuesets we get from VSAC.
    if (typeof vsacCache !== 'undefined') {
      this.cache = vsacCache;
    } else {
      this.cache = 'vsac_cache';
    }

    const cacheDBFile = path.join(this.cache, 'valueset-db.json');
    if (loadFromCache && fs.existsSync(cacheDBFile)) {
      this.loadValueSetsFromFile(cacheDBFile);
    }
  }

  /**
   * Add value sets to the code service from a JSON file.  The JSON should be a
   * nested set of objects. At the first level the key is the 'oid' of a
   * particular valueset. At the second level the key specifies the 'version'
   * of the valueset; there could be multiple versions included here. The
   * contents of valueSetsObj[oid][version] is an array of 'Code' objects. See
   * cql.Code for more information, but Code objects consist of three keys:
   * 1) 'code', 2) 'system', and 3) 'version'. The last is optional.
   * If the file does not exist, nothing is added.
   * @param {string} filePath - the path to the file containing valueset JSON
   * @throws {SyntaxException} File is not valid JSON
   */
  loadValueSetsFromFile(filePath) {
    filePath = path.resolve(filePath);
    if (! fs.existsSync(filePath)) {
      return;
    }
    const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    for (let oid in json) {
      let myOid = json[oid];
      for (let version in myOid) {
        let myCodes = myOid[version].codes.map(elem => new Code(elem.code, elem.system, elem.version));
        if (typeof this.valueSets[oid] === 'undefined') {
          this.valueSets[oid] = {};
        }
        this.valueSets[oid][version] = new ValueSet(oid, version, myCodes);
      }
    }
  }

  /**
   * Given a list of value set references, will ensure that each has a local
   * definition.  If a local definition does not exist, the value set will
   * be downloaded using the VSAC API.
   * @param {Object} valueSetList - an array of objects, each containing "name"
   *   and "id" properties, with an optional "version" property
   * @returns {Promise.<undefined,Error>} A promise that returns nothing when
   *   resolved and returns an error when rejected.
   */
  ensureValueSets(valueSetList = [], umlsUserName = env['UMLS_USER_NAME'], umlsPassword = env['UMLS_PASSWORD']) {
    // First, filter out the value sets we already have
    const filteredVSList = valueSetList.filter(vs => {
      const result = this.findValueSet(vs.id, vs.version);
      return typeof result === 'undefined';
    });
    // Now download from VSAC if necessary
    if (filteredVSList.length == 0) {
      return Promise.resolve();
    } else if ( typeof umlsUserName === 'undefined' || umlsUserName == null ||typeof umlsPassword === 'undefined' || umlsPassword == null) {
      return Promise.reject('Failed to download value sets since UMLS_USER_NAME and/or UMLS_PASSWORD is not set.');
    } else {
      return downloadFromVSAC(umlsUserName, umlsPassword, filteredVSList, this.cache, this.valueSets);
    }
  }

  /**
   * Given a library, will detect referenced value sets and ensure that each has a local definition.  If a local definition
   * does not exist, the value set will be downloaded using the VSAC API.
   * @param {Object} library - the CQL Library object to look for referenced value sets in
   * @param {boolean} checkIncluded - indicates if "included" libraries should also be checked
   * @param {string} umlsUserName - the UMLS username to use when downloading value sets (defaults to env "UMLS_USER_NAME")
   * @param {string} umlsPassword - the UMLS password to use when downloading value sets (defaults to env "UMLS_PASSWORD")
   * @returns {Promise.<undefined,Error>} A promise that returns nothing when resolved and returns an error when rejected.
   */
  ensureValueSetsInLibrary(library, checkIncluded = true, umlsUserName = env['UMLS_USER_NAME'], umlsPassword = env['UMLS_PASSWORD']) {
    const valueSets = extractSetOfValueSetsFromLibrary(library, checkIncluded);
    return this.ensureValueSets(Array.from(valueSets), umlsUserName, umlsPassword);
  }

  findValueSetsByOid(oid) {
    const result = [];
    const vs = this.valueSets[oid];
    for (let version in vs) {
      result.push(vs[version]);
    }
    return result;
  }

  findValueSet(oid, version) {
    if (version != null) {
      const vsObj = this.valueSets[oid];
      if (typeof vsObj !== 'undefined') {
        return vsObj[version];
      } else {
        return;
      }
    }
    else {
      const results = this.findValueSetsByOid(oid);
      if (results.length === 0) {
        return;
      }
      else {
        return results.reduce(function(a, b) {
          if (a.version > b.version) {
            return a;
          }
          else {
            return b;
          }
        });
      }
    }
  }
}

/**
 * Extracts the referenced value sets from a CQL Library and (optionally) its included libraries
 * @param {Object} library - the CQL Library to extract the referenced value sets from
 * @param {boolean} extractFromIncluded - indicates if "included" libraries should be searched for referenced value sets
 * @param {Set} valueSets - the Set of valueSets extracted so far (defaults to empty set)
 * @returns {Set} the set of value sets referenced by the library
 */
function extractSetOfValueSetsFromLibrary(library, extractFromIncluded = true, valueSets = new Set()) {
  // First add all the value sets from this library into the set
  Object.values(library.valuesets).forEach(vs => valueSets.add(vs));
  // Then, if requested, loop through the included libraries and add value sets from each of them
  if (extractFromIncluded && library.includes) {
    Object.values(library.includes).forEach(included => extractSetOfValueSetsFromLibrary(included, extractFromIncluded, valueSets));
  }
  return valueSets;
}

module.exports = { CodeService };