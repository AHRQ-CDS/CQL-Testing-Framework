const { v4: uuidv4 } = require('uuid');

function initPostmanCollection(libraryHandle) {
  const postmanCollection = {
    info: {
      _postman_id: uuidv4(),
      name: `CQL Hooks: ${libraryHandle}`,
      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
    },
    item: [],
    event: [{
      listen: 'prerequest',
      script: { id: uuidv4(), type: 'text/javascript', exec: [''] }
    },
    {
      listen: 'test',
      script: { id: uuidv4(), type: 'text/javascript', exec: [''] }
    }]
  };
  return postmanCollection;
}

function addHooksRequest(testCase, hooksRequest, hook, postmanCollection) {
  const item = {
    name: testCase.name,
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
        raw: `http://localhost:3000/cds-services/${hook.id}`,
        protocol: 'http',
        host: [ 'localhost' ],
        port: '3000',
        path: [ 'cds-services', hook.id ]
      }
    },
    response: []
  };
  if (hook.pmTestGenSupport !== '') {
    addTests(item, testCase, hook.pmTestGenSupport);
  }

  postmanCollection.item.push(item);
}

function addTests(item, testCase, genPath) {
  const exec = [];
  const generator = require(genPath);

  const expectOK = getOrInvoke(generator.expectOK, testCase);
  if (expectOK != null) {
    if (expectOK) {
      addToExec(exec, [
        'pm.test("Response is HTTP 200", function () {',
        '  pm.response.to.have.status(200);',
        '});'
      ]);
    } else {
      addToExec(exec, [
        'pm.test("Response is not HTTP 200", function () {',
        '  pm.response.to.not.have.status(200);',
        '});'
      ]);
    }
  }

  const expectCards = getOrInvoke(generator.expectCards, testCase);
  if (expectCards != null) {
    if (expectCards) {
      addToExec(exec, [
        'pm.test("Response has cards", function () {',
        '  var jsonData = pm.response.json();',
        '  pm.expect(jsonData.cards.length).to.be.greaterThan(0);',
        '});'
      ]);
    } else {
      addToExec(exec, [
        'pm.test("Response does not have cards", function () {',
        '  var jsonData = pm.response.json();',
        '  pm.expect(jsonData.cards.length).to.eql(0);',
        '});'
      ]);
    }
  }

  const expectCardsContent = getOrInvoke(generator.expectCardsContent, testCase);
  if (expectCardsContent != null) {
    if (expectCardsContent) {
      // If it's not an array, put it into an array
      const cards = Array.isArray(expectCardsContent) ? expectCardsContent : [expectCardsContent];
      addToExec(exec, [
        `var expectedCards = ${JSON.stringify(cards, null, 2)};`,
        '',
        'pm.test("Response has correct card content", function () {',
        '  var jsonData = pm.response.json();',
        '  pm.expect(jsonData.cards).to.eql(expectedCards);',
        '});'
      ]);
    }
  }

  item.event = [{
    listen: 'test',
    script: { id: uuidv4(), type: 'text/javascript', exec: exec }
  }];

}

function getOrInvoke(fnOrThing, testCase) {
  if (typeof fnOrThing === 'function') {
    return fnOrThing(testCase);
  }
  return fnOrThing;
}

function addToExec(exec, code, blankLineAtEnd = true) {
  if (Array.isArray(code)) {
    // Add the array items to the exec array
    exec.push(...code);
  } else if (typeof code === 'function') {
    // Add the function body to the exec array
    const fnString = code.toString();
    const fnBodyString = fnString.slice(fnString.indexOf('{') + 1, fnString.lastIndexOf('}'));
    exec.push(...fnBodyString.split('\n'));
  } else {
    // Add the function string to the exec array
    exec.push(...code.split('\n'));
  }

  if (blankLineAtEnd) {
    exec.push('');
  }
}

module.exports = { initPostmanCollection, addHooksRequest };