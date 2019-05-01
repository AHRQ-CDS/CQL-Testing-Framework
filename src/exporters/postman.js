const uuidv4 = require('uuid/v4');

function initEvents() {
  return [{
    listen: 'prerequest',
    script: { id: uuidv4(), type: 'text/javascript', exec: [''] }
  },
  {
    listen: 'test',
    script: { id: uuidv4(), type: 'text/javascript', exec: [''] }
  }];
}

function initPostmanCollection(libraryHandle, hooks) {
  const postmanCollection = {
    info: {
      _postman_id: uuidv4(),
      name: `CQL Hooks: ${libraryHandle}`,
      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
    },
    item: [],
    event: initEvents()
  };
  // If there are multiple hooks, then create folders within the collection for each hook
  if (hooks.length > 1) {
    hooks.forEach(hook => {
      postmanCollection.items.push({
        name: hook,
        item: [],
        event: initEvents()
      });
    });
  }
  return postmanCollection;
}

function addHooksRequest(name, hooksRequest, hooks, postmanCollection) {
  hooks.forEach((hook, i) => {
    // If there's only one hook, put it in the main item array;
    // Otherwise put it in the hook folder's item array
    const items = hooks.length == 1 ? postmanCollection.item : postmanCollection.item[i].item;
    items.push({
      name: name,
      request: {
        method: 'POST',
        header: [
          { key: 'Accept', value: 'application/json' },
          { key: 'Content-Type', value: 'application/json' }
        ],
        body: {
          mode: 'raw',
          raw: JSON.stringify(hooksRequest, null, 2)
        },
        url: {
          raw: `http://localhost:3000/cds-services/${hook}`,
          protocol: 'http',
          host: [ 'localhost' ],
          port: '3000',
          path: [ 'cds-services', hook ]
        }
      },
      response: []
    });
  });
}

module.exports = { initPostmanCollection, addHooksRequest };