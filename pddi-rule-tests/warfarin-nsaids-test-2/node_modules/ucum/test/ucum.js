var assert = require('assert');
var ucum = require('../ucum');
var tests = require('../generated/tests.json');
var helpers = require('../lib/helpers');

describe('Ucum parser', function(){
  it('Should convert: centimerters to inches', function(){
    r = ucum.convert(2.54, 'cm', '[in_i]');
    assert(r === 1);
  });
  it('Should parse units: kilometers per hour', function(){
    r = ucum.parse('km/h');
    r.should.eql({ value: 1000, units: { m: 1, h: -1 },
      "metadata": {
        "m": {
          "isBase": true,
          "prefix": {
            "CODE": "K",
            "names": [
              "kilo"
            ],
            "printSymbols": [
              "k"
            ],
            "values": [
              {
                "printable": "1 &#215; 10<sup>3</sup>",
                "numeric": 1000
              }
            ]
          },
          "CODE": "M",
          "dim": "L",
          "names": [
            "meter"
          ],
          "printSymbols": [
            "m"
          ],
          "properties": [
            "length"
          ]
        },
        "h": {
          "CODE": "HR",
          "isBase": false,
          "isMetric": "no",
          "class": "iso1000",
          "names": [
            "hour"
          ],
          "printSymbols": [
            "h"
          ],
          "properties": [
            "time"
          ],
          "values": [
            {
              "printable": "60",
              "numeric": 60
            }
          ]
        }
      }
    });
  });
  it('Should canonicalize units: inches per year', function(){
    r = ucum.canonicalize('[in_i]/a');
    r.should.eql({ value: 8.048774304763354e-10, units: { m: 1, s: -1 },
        "metadata": {
          "m": {
            "isBase": true,
            "CODE": "M",
            "dim": "L",
            "names": [
              "meter"
            ],
            "printSymbols": [
              "m"
            ],
            "properties": [
              "length"
            ]
          },
          "s": {
            "isBase": true,
            "CODE": "S",
            "dim": "T",
            "names": [
              "second"
            ],
            "printSymbols": [
              "s"
            ],
            "properties": [
              "time"
            ]
          }
        }
      }
    );
  });
  it('Can "convert days"', function(){
    r = ucum.convert(1, 'd', 's');
    assert(r === 24*60*60);
  });
});

describe('Ucum formatting tests', function(){
  it('Should format units: pound * inches / hour ^ 2 as string and do not print value', function(){
    r = ucum.format('[lb_av].[in_i]/h/h');
    r.should.eql('lb*in/h<sup>2</sup>');
  });
  it('Should format units: pound * inches / hour ^ 2 as string and print value', function(){
    r = ucum.format('[lb_av].[in_i]/h/h', true);
    r.should.eql('1 lb*in/h<sup>2</sup>');
  });
  it('Should format units: km/ms as string and do not print value', function(){
     r = ucum.format('km/ms');
     r.should.eql('km/ms');
  });
  it('Should format units: pound * inches / hour ^ 2 as string with value', function(){
    r = ucum.format(3, '[lb_av].[in_i]/h/h', true);
    r.should.eql('3 lb*in/h<sup>2</sup>');
  });
  it('Should format units: pound * inches / hour ^ 2 as object and do not print value', function(){
    r = ucum.format(ucum.parse(3, '[lb_av].[in_i]/h/h'));
    r.should.eql('lb*in/h<sup>2</sup>');
  });
  it('Should format units: pound * inches / hour ^ 2 as object and print value', function(){
    r = ucum.format(ucum.parse(3, '[lb_av].[in_i]/h/h'), true);
    r.should.eql('3 lb*in/h<sup>2</sup>');
  });
  it('Should format units: km/ms as object and do not print value', function(){
     r = ucum.format(ucum.parse('km/ms'));
     r.should.eql('km/ms');
  });

});


var skipForPrecision = ['3-113','3-115','3-118','3-119'];
describe('Ucum functional tests', function(){

  tests.validation.forEach(function(t){
    it('Handles case ' + t.id + ': ' + t.unit + '==' + t.valid, function(){
      var parsed = false;
      try {
        ucum.parse(t.unit);
        parsed = true;
      } catch(e){ }
      if (parsed) {
        assert(t.valid === 'true');
      } else {
        assert(t.valid === 'false');
      }
    });
  });

  tests.conversion.forEach(function(t){
    if (skipForPrecision.indexOf(t.id) !== -1){ return; }
    it('Handles case ' + t.id +
      ': '+t.value + t.srcUnit +
      '->' + t.dstUnit+' = '+t.outcome,
    function(){
      var tin = parseFloat(t.value);
      var tout = parseFloat(t.outcome);
      var r = ucum.convert(tin, t.srcUnit, t.dstUnit);
      (r).should.be.approximately(tout,.0000000000001*tout);
    });
  });

});
