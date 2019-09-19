const vsacCS = require('./vsac-code-systems');
const parseString = require('xml2js').parseString;
const {Code, ValueSet} = require('cql-execution');

// Take in a string containing a string of the XML response from a VSAC SVS
// response and parse it into a vsDB object.  This code makes strong
// assumptions about the structure of the message.  See code below.
function parseVSACXML(xmlString, vsDB={}) {
  if (typeof xmlString === 'undefined' || xmlString == null || xmlString.trim().length == 0) {
    return;
  }
  // Parse the XML string.
  let parsedXML;
  parseString(xmlString, (err, res) => { parsedXML = res; });

  // Pull out the OID and version for this valueset.
  const vsOID = parsedXML['ns0:RetrieveValueSetResponse']['ns0:ValueSet'][0]['$']['ID'];
  const vsVersion = parsedXML['ns0:RetrieveValueSetResponse']['ns0:ValueSet'][0]['$']['version'];

  // Grab the list of codes.
  const conceptList = parsedXML['ns0:RetrieveValueSetResponse']['ns0:ValueSet'][0]['ns0:ConceptList'][0]['ns0:Concept'];

  // Loop over the codes and build the JSON.
  const codeList = [];
  for (let concept in conceptList) {
    let system;
    const systemOID = conceptList[concept]['$']['codeSystem'];
    if (typeof vsacCS[systemOID] !== 'undefined' && typeof vsacCS[systemOID].uri !== 'undefined') {
      system = vsacCS[systemOID].uri;
    } else {
      system = `urn:oid:${systemOID}`;
    }

    const code = conceptList[concept]['$']['code'];
    const version = conceptList[concept]['$']['codeSystemVersion'];
    codeList.push({ code, system, version });
  }

  // Format according to the current valueset db JSON.
  const result = {};
  result[vsOID] = vsDB[vsOID] = {};
  let myCodes = codeList.map(elem => new Code(elem.code, elem.system, elem.version));
  result[vsOID][vsVersion] = vsDB[vsOID][vsVersion] = new ValueSet(vsOID, vsVersion, myCodes);
  return result;
}

module.exports = parseVSACXML;
