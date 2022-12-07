const fs = require('fs');
const yaml = require('js-yaml');

const _cache = new Map();

function load(version) {
  if (!_cache.has(version)) {
    if (!fs.existsSync(`${__dirname}/${version}`)) {
      return;
    }

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

    // Load the config
    const configYaml = yaml.load(fs.readFileSync(`${__dirname}/${version}/config.yaml`, 'utf-8'));
    if (configYaml && configYaml.resources) {
      Object.keys(configYaml.resources).forEach(name => {
        result.config.addResource(name, configYaml.resources[name]);
      });
    }

    _cache.set(version, result);
  }

  return _cache.get(version);
}

class FHIRDefinitions {

  constructor(version) {
    this._version = version;
    this._resources = new Map();
    this._types = new Map();
    this._valueSets = new Map();
    this._config = new Config(version);
  }

  get version() {
    return this._version;
  }

  get config() {
    return this._config;
  }

  getResourceNames() {
    return Array.from(this._resources.values()).map(v => v.id);
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
    if (this._resources.has(key)) {
      return this.findResource(key);
    } else if (this._types.has(key)) {
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

class Config {
  constructor(version) {
    this._version = version;
    this._resources = new Map();
  }

  getResourceNames() {
    return Array.from(this._resources.keys());
  }

  addResource(name, info) {
    this._resources.set(name, info);
  }

  findResource(name) {
    return this._resources.get(name);
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