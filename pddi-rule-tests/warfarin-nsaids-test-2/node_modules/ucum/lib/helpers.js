module.exports = {

  multiply: function multiply(t, ms) {
    //console.log("Multiply: ", JSON.stringify(t), JSON.stringify(ms));
    if (ms.length == 0) return t;

    var ret = t;
    ms.forEach(function(mterm){

      var sign = (mterm[0] == "." ? 1 : -1);
      var b = mterm[1];

      ret.value *= Math.pow(b.value, sign);
      //console.log("b = ", JSON.stringify(b));
      //console.log("ret = ", JSON.stringify(ret));
      Object.keys(b.units).forEach(function(u){
        ret.units[u] = ret.units[u] || 0;
        ret.units[u] = ret.units[u] + sign*b.units[u];

        if(!ret.metadata && b.metadata){
          ret.metadata = {};
          ret.metadata[u] = b.metadata[u];
        }
        else if(ret.metadata && b.metadata){
          ret.metadata[u] = b.metadata[u];
        }

        if (ret.units[u] == 0){
          delete ret.units[u];
          if(ret.metadata) {
            delete ret.metadata[u];
          }
        }
      });

    });

    //console.log("Multiply ret: ", ret);
    return ret;
  },

  topower: function topower(e, exp){
    if (!exp) {exp = 1;}
    var ret = e;
    ret.value = Math.pow(ret.value, exp);
    Object.keys(e.units).forEach(function(u){
      ret.units[u] = e.units[u] * exp;
    });

    return ret;
  },

  cleanup: function cleanup(e) {
    ["10^", "10*"].forEach(function(k){
      if (e.units[k]) {
        e.value *= Math.pow(10, e.units[k]);
        delete e.units[k];
      }
    });
    return e;
  },

  ismetric: function(metrics) {
    return function(u) {
      return metrics[Object.keys(u.units)[0]] !== undefined;
    };
  }
}
