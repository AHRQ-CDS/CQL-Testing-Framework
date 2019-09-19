const fs = require('fs');
const path = require('path');
const rpn = require('request-promise-native');
const mkdirp = require('mkdirp');
const parseVSACXML = require('./parse-vsac');
const debug = require('debug')('vsac'); // To turn on DEBUG: $ export DEBUG=vsac

function downloadFromVSAC(username, password, input, output, vsDB={}) {
  var vsJSON = {};
  if (typeof(input) === 'string') {
    path.resolve(input);
    vsJSON = require(input);
  } else {
    var keys = Object.keys(input);
    keys.forEach(function(val,idx) {
      if (!(input[val].id in vsDB)) {
        vsJSON[input[val].name] = input[val].id;
      }
    });
  }
  if (Object.keys(vsJSON).length > 0) {
    output = path.resolve(output);
    const oids = Object.keys(vsJSON).map(k => vsJSON[k]);
    if (!fs.existsSync(output)){
      mkdirp.sync(output);
    }
    return getTicketGrantingTicket(username, password)
    .then((ticketGrantingTicket) => {
      const promises = oids.map(oid => {
        // Catch errors and convert to resolutions returning an error.  This ensures Promise.all waits for all promises.
        // See: http://stackoverflow.com/questions/31424561/wait-until-all-es6-promises-complete-even-rejected-promises
        return downloadValueSet(ticketGrantingTicket, oid, output, vsDB)
        .catch((err) => {
          debug(`Error downloading valueset ${oid}`, err);
          return new Error(`Error downloading valueset: ${oid}`);
        });
      });
      return Promise.all(promises);
    })
    .then((results) => {
      const errors = results.filter(r => r instanceof Error);
      if (results.length - errors.length > 0) {
        // There were results, so write the file first before resolving/rejecting
        return writeFile(path.join(output, 'valueset-db.json'), JSON.stringify(vsDB, null, 2))
        .then(
          (result) => errors.length == 0 ? result : Promise.reject(errors),
          (err) => { errors.push(err); return Promise.reject(errors); }
        );
      }
      if (errors.length > 0) {
        return Promise.reject(errors);
      }
    });
  } else {
    return Promise.resolve();
  }
}

function getTicketGrantingTicket(username, password) {
  debug('Getting TGT');
  const options = {
    method: 'POST',
    url: 'https://vsac.nlm.nih.gov/vsac/ws/Ticket',
    form: { username, password }
  };
  return rpn(options);
}

function downloadValueSet(ticketGrantingTicket, oid, output, vsDB={}) {
  return  getServiceTicket(ticketGrantingTicket)
  .then((serviceTicket) => {
    return getValueSet(serviceTicket, oid);
  })
  .then((data) => {
    parseVSACXML(data, vsDB);
    return writeFile(path.join(output, `${oid}.xml`), data);
  });
}

function getServiceTicket(ticketGrantingTicket) {
  debug('Getting ST');
  const options = {
    method: 'POST',
    url: `https://vsac.nlm.nih.gov/vsac/ws/Ticket/${ticketGrantingTicket}`,
    form: { service: 'http://umlsks.nlm.nih.gov' }
  };
  return rpn(options);
}

function getValueSet(serviceTicket, oid) {
  debug('Getting ValueSet:', oid);
  const options = {
    url: 'https://vsac.nlm.nih.gov/vsac/svs/RetrieveValueSet',
    qs: { id: oid, ticket: serviceTicket }
  };
  return rpn(options);
}

function writeFile(file, data) {
  return new Promise((resolve, reject) => {
    debug('Writing:', file);
    fs.writeFile(file, data, (err) => {
      if (typeof err !== 'undefined' && err != null) {
        debug('Error writing file', file);
        reject(err);
      } else {
        debug('Wrote file', file);
        resolve(file);
      }
    });
  });
}

module.exports = {downloadFromVSAC};