const uuidv4 = require('uuid/v4');

function createHooksRequest(bundle, resourceTypes) {
  // Clone it so we don't unintentionall mess it up
  bundle = JSON.parse(JSON.stringify(bundle));

  const request = {
    hookInstance: uuidv4(),
    hook: 'patient-view',
    user: 'Practitioner/example',
    context: {},
    prefetch: {}
  };

  // First add all of the test data from the bundle
  for (const entry of bundle.entry) {
    if (entry.resource == null) {
      continue;
    }
    const type = entry.resource.resourceType;
    if (type === 'Patient') {
      request.context.patientId = entry.resource.id;
      request.prefetch['Patient'] = entry.resource;
    } else {
      if (resourceTypes.includes(type)) {
        if (request.prefetch[type] == null) {
          request.prefetch[type] = {
            resourceType: 'Bundle',
            type: 'searchset',
            entry: []
          };
        }
        request.prefetch[type].entry.push({ resource: entry.resource });
      }
    }
  }

  // Next add any missing prefetch queries (based on resource types used in ELM)
  for (const type of resourceTypes) {
    if (request.prefetch[type] == null) {
      request.prefetch[type] = {
        resourceType: 'Bundle',
        type: 'searchset',
        entry: []
      };
    }
  }

  return request;
}

// NOTE: The following functions follow the basic pattern used by cql-services to extract prefetch queries from ELM

function extractPrefetchKeys(library) {
  const types = new Set();
  if (library && library.source && library.source.library && library.source.library.statements && library.source.library.statements.def) {
    for (const expDef of Object.values(library.source.library.statements.def)) {
      extractResourceTypesFromExpression(types, expDef.expression);
    }
  }
  return Array.from(types);
}

function extractResourceTypesFromExpression(types, expression) {
  if (expression && Array.isArray(expression)) {
    expression.forEach(e => extractResourceTypesFromExpression(types, e));
  } else if (expression && typeof expression === 'object') {
    if (expression.type === 'Retrieve') {
      const match = /^(\{http:\/\/hl7.org\/fhir\})?([A-Z][a-zA-Z]+)$/.exec(expression.dataType);
      if (match) {
        types.add(match[2]);
      }
    } else {
      for (const val of Object.values(expression)) {
        extractResourceTypesFromExpression(types, val);
      }
    }
  }
}

module.exports = { createHooksRequest, extractPrefetchKeys };