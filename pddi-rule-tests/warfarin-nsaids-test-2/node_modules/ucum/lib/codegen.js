var args = require('optimist').argv,
fs = require('fs'),
helpers = require('./helpers'),
xml2js = require('xml2js');
var unitMetadata = [];

var parser = new xml2js.Parser();
var essence = fs.readFileSync(__dirname+'/../vendor/ucum-essence.xml').toString();
var cdataessence = fs.readFileSync(__dirname+'/../generated/ucum-essence.xml').toString();
var tests = fs.readFileSync(__dirname+'/../vendor/ucum-functional-tests.xml').toString();
unitMetadata = fs.readFileSync(__dirname+'/../generated/unitMetadata.json').toString();
try{
  unitMetadata = JSON.parse(unitMetadata);
}
catch(e){

}

var prefixes;

parser.parseString(tests, function (err, result) {
  if (args.tests) {
    console.log(JSON.stringify(extractTests(result), null, 2));
  }
});

parser.parseString(cdataessence, function(err, result){
  if(args.prefixMetadata){
    var prefixMetadata = extractPrefixMetadata(result);
    console.log(JSON.stringify(prefixMetadata, null, 2));
  }

  if(args.unitMetadata){
    var unitMetadata = extractUnitMetadata(result);
    console.log(JSON.stringify(unitMetadata, null, 2));
  }
});

parser.parseString(essence, function (err, result) {
  prefixes = extractPrefixes(result);

  if (args.equivalents) {
    console.log(JSON.stringify(extractEquivalents(result), null, 2));
  }

  if (args.prefixes) {
    console.log(JSON.stringify(prefixes, null, 2));
  }

  if (args.metrics) {
    var metrics = extractMetric(result, true).concat(extractBase(result));
    var dict = {};
    metrics.forEach(function(m){
      dict[m] = true;
    });
    console.log(JSON.stringify(dict));
  }

  if (args.peg) {
    ATOM = extractMetric(result, false);
    METRICATOM = extractMetric(result, true).concat(extractBase(result));
    METRICATOM = expand(METRICATOM, ATOM);
    METRICATOM = pegOpts(METRICATOM, true);

    var pegfile = fs.readFileSync(__dirname+'/ucum-parser.peg.template').toString();
    pegfile = pegfile.replace("{{METRICATOM}}", METRICATOM);

    PREFIX = pegOpts(Object.keys(prefixes), false);
    pegfile = pegfile.replace("{{PREFIX}}", PREFIX);
    console.log(pegfile);
  }

  if(args.cdataxml){
    var randomStringForSelfClosingPrintSymbol = "XmspB8Z1E5EdaqpfNQzT";
    var randomStringForSelfClosingValue = "2zdAqQ2b60onQArctPkt";

    var cdataxml = essence.replace(/<printSymbol\/>/g, randomStringForSelfClosingPrintSymbol);
    cdataxml = cdataxml.replace(/<value\/>/g, randomStringForSelfClosingValue);

    cdataxml = cdataxml.replace(/(<printSymbol(?:.|\n)*?(?:>))/g, "$1<![CDATA[");
    cdataxml = cdataxml.replace(/(<\/printSymbol>)/g, "]]>$1");

    cdataxml = cdataxml.replace(/(<value(?:.|\n)*?(?:>))/g, "$1<![CDATA[");
    cdataxml = cdataxml.replace(/(<\/value>)/g, "]]>$1");

    var re = new RegExp(randomStringForSelfClosingPrintSymbol, "g");
    cdataxml = cdataxml.replace(re, "<printSymbol/>");

    var re = new RegExp(randomStringForSelfClosingValue, "g");
    cdataxml = cdataxml.replace(re, "<value/>");

    console.log(cdataxml);
  }

});

function expand(metrics, nonmetrics){
  var ret = [];

  function addM(m){
     var metaDataElement = '"metadata": {"' + m + '":' + JSON.stringify(unitMetadata[m]) + '}';
     ret.push([m, 'u:"'+m+'" {return {"value": 1, "units": {"'+m+'": 1}, ' + metaDataElement + '};}']);
  }

  metrics.forEach(addM);
  nonmetrics.forEach(addM);

  ret = ret.sort(function(a,b){
    if (a[0].length > b[0].length){
      return -1;
    }
    if (a[0].length < b[0].length){
      return 1;
    }
    return 0;
  });

  return ret.map(function(v){return v[1];});
}

function pegOpts(l, alreadyQuoted){
  var q = (alreadyQuoted ? '': '"');
  return q + l.join(q+' \n/ '+q)+ q;
}

function extractPrefixes(result) {
  var ret = {};
  result.root.prefix.forEach(function(p){
    ret[p.$.Code] =parseFloat(p.value[0].$.value);
  });
  return ret;
}

function extractMetadata(root, isBase){
  var ret = {};
  root.forEach(function(p){
    var elem = {};
    if(isBase !== undefined) {
      elem.isBase = isBase;
    }
    Object.keys(p).forEach(function(key){
      switch(key){
        case "$":
          Object.keys(p[key]).forEach(function(attr){
            if(attr !== "xmlns" && attr !== "Code"){ // don't include xmlns or Code
              elem[attr] = p[key][attr];
            }
          });
          break;
        case "name": // in general this is an array
          elem.names = [];
          p[key].forEach(function(name){
            elem.names.push(name);
          });
          break;
        case "printSymbol": // is an array, of objects
          elem.printSymbols = [];
          p[key].forEach(function(name){
            elem.printSymbols.push(name.trim());
          });
          break;
        case "property":
          elem.properties= [];
          p[key].forEach(function(name){
            elem.properties.push(name.trim());
          });
          break;
        case "value":
          elem.values = [];
          p[key].forEach(function(obj){
            elem.values.push({
              printable: obj._.trim(),
              numeric: parseFloat(obj.$.value)
            });
          });
          break;
        default:
          //console.log("Unhandled key: " + key);
          break;
      }
    });

    ret[p.$.Code] = elem;
  });
  return ret;
}

function extractUnitMetadata(result){
  var baseunit_res = extractMetadata(result.root['base-unit'], true);
  var unit_res = extractMetadata(result.root.unit, false);
  Object.keys(baseunit_res).forEach(function(key){
    unit_res[key] = baseunit_res[key];
  });
  return unit_res;
}

function extractPrefixMetadata(result){
  return extractMetadata(result.root.prefix);
}

function code(u){
  return u.$.Code;
}

function extractMetric(result, bool){
 return result.root.unit.filter(function(m){
   return m.$.isMetric === (bool ? 'yes' : 'no');
 }).map(code);
}

function extractBase(result){
 return result.root['base-unit'].map(code);
}

function equivalent(u){
 return [code(u), {value: parseFloat(u.value[0].$.value), ucum: u.value[0].$.Unit}];
}


function extractEquivalents(result){
 var ret = {};
 result.root.unit
  .map(equivalent)
  .forEach(function(e){ret[e[0]] = e[1];});
 return ret;
}

function extractTests(result){
  var ret = {};
  ret.validation = result.ucumTests.validation[0]['case'].map(function(c){
    return c.$;
  });
  ret.conversion = result.ucumTests.conversion[0]['case'].map(function(c){
    return c.$;
  });
  return ret;
};

