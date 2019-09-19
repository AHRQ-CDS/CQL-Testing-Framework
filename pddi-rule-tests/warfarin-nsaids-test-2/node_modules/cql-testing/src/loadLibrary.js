const { Library, Repository } = require('cql-execution');
const fs = require('fs-extra');
const path = require('path');
const semver = require('semver');

/**
 * Loads a library (represented by ELM JSON) and its dependencies, returning a proper
 * CQL Library instance.
 *
 * @param {string | {id: string, version?: string}} library - the primary library to load
 * @param {string[]} paths - an array of file paths in which to find the library and its dependencies
 * @returns {Library} the Library instance w/ all required libraries loaded
 */
function loadLibrary(library, paths) {
  const libraries = paths.reduce((accumulator, current) => detectLibraries(current, accumulator), []);
  const primaryId = typeof library === 'string' ? { id: library } : library;
  const primaryLib = findLibrary(primaryId, libraries);
  const includedLibs = findIncludedLibraries(primaryLib, libraries);
  return new Library(primaryLib, new Repository(includedLibs));
}

function detectLibraries(libPath, libraries=[]) {
  const stat = fs.statSync(libPath);
  if (stat.isDirectory()) {
    for (const fileName of fs.readdirSync(libPath)) {
      const file = path.join(libPath, fileName);
      detectLibraries(file, libraries);
    }
  } else if (stat.isFile() && libPath.endsWith('.json')) {
    const json = fs.readJSONSync(libPath, 'utf8');
    if (json && json.library && json.library.identifier && json.library.identifier.id) {
      libraries.push(json);
    }
  }
  return libraries;
}

function findLibrary(identifier, libraries) {
  if (identifier.version != null) {
    // Find by exact match only
    return libraries.find(lib => {
      return id(lib) === identifier.id && version(lib) === identifier.version;
    });
  }
  // No version specified, so get the latest
  return libraries.filter(lib => id(lib) === identifier.id).reduce(versionReducer);
}

function findIncludedLibraries(library, libraries, includedLibraries={}) {
  if (library.library.includes && library.library.includes.def) {
    for (const includedId of library.library.includes.def) {
      const included = findLibrary({ id: includedId.path, version: includedId.version }, libraries);
      if (includedLibraries[id(included)]) {
        // If the required lib is a different version than what's already included, throw...
        if (version(includedLibraries[id(included)]) !== version(included)) {
          throw new Error(`Can't resolve depency on ${id(included)}. Conflicting versions included.`);
        }
        // Otherwise it's a duplicate that we don't want to process again, so continue
        continue;
      }
      includedLibraries[id(included)] = included;
      findIncludedLibraries(included, libraries, includedLibraries);
    }
  }
  return includedLibraries;
}

function versionReducer(latest, current) {
  if (latest && semver.gte(version(latest), version(current))) {
    return latest;
  }
  return current;
}

function id(lib) {
  return lib.library.identifier.id;
}

function version(lib) {
  return lib.library.identifier.version;
}

module.exports = loadLibrary;