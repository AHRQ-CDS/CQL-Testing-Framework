const fs = require('fs');

const _cache = new Map();

function load(version) {
  if (!_cache.has(version)) {
    const result = new FHIRDefinitions(version);
    // Load the base FHIR definitions
    const files = [
      `${__dirname}/${version}/profiles-resources.json`,
      `${__dirname}/${version}/profiles-types.json`,
      `${__dirname}/${version}/valuesets.json`
    ];
    for (const file of files) {
      const definitions = JSON.parse(fs.readFileSync(file, 'utf-8'));
      for (const entry of definitions.entry) {
        result.add(entry.resource);
      }
    }

    _cache.set(version, result);
  }

  return _cache.get(version);
}

class FHIRDefinitions {

  constructor(target) {
    this._target = target;
    this._resources = new Map();
    this._types = new Map();
    this._valueSets = new Map();
  }

  findResource(key) {
    return this._resources.get(key);
  }

  findType(key) {
    return this._types.get(key);
  }

  findValueSet(key) {
    return this._valueSets.get(key);
  }

  find(key) {
    if (this.resources.has(key)) {
      return this.findResource(key);
    } else if (this.types.has(key)) {
      return this.findType(key);
    } else {
      return this.findValueSet(key);
    }
  }

  add(definition) {
    if (
      definition.kind === 'primitive-type' ||
      definition.kind === 'complex-type' ||
      definition.kind === 'datatype'
    ) {
      addDefinitionToMap(definition, this._types);
    } else if (definition.kind == 'resource') {
      addDefinitionToMap(definition, this._resources);
    } else if (definition.resourceType == 'ValueSet') {
      addDefinitionToMap(definition, this._valueSets);
    }
    // TODO: CodeSystems? Other things?
  }
}

function addDefinitionToMap(def, defMap) {
  if (def.id) {
    defMap.set(def.id, def);
  }
  if (def.url) {
    defMap.set(def.url, def);
  }
}

module.exports = load;