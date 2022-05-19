const ftoc = function(temp) {
  let num = (temp - 32) * (5/9);
return +(Math.round(num + "e+1")  + "e-1");
};

const ctof = function(temp) {
  let num = (temp * (9/5)) + 32;
return +(Math.round(num + "e+1")  + "e-1");
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
