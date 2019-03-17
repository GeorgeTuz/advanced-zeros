module.exports = function getZerosCount(number, base) {
  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
  var j = 0;
  var s = 0;
  var i = 2;
  var p = 2;
  var x = base;
  var power = 1;
  var powermax = 1;
  var maxmult = 0;
  var a = new Array();
  var res = new Array();
  do {
    if (base % i == 0) {
      a[j] = i;
      j++;
      base = base / i;
    } else {
      i++;
    }
  } while (i < base);
  a[j] = i;
  j = 0;
  for (var i=0; i<a.length; i++) {
    if (a[i] === a[i+1]) {
      powermax++;
    } else {
      if (x == 2){
        powermax = 1;
      }
      power = a[i];
	    maxmult = power;
      while (p >= 1) {
        p = Math.trunc(number/power);
        s = s + p;
        power = power * maxmult;	
      }
      res[j] = Math.trunc(s/powermax);
      j++;
	    p = 2;
	    s = 0;
	    powermax = 1; 
    }
  }
  return (Math.min.apply(null, res));
}


