const ftoc = function(fahrenheit) {
  let c = ((fahrenheit - 32) * (5 / 9)).toFixed(1);
  return parseFloat(c);
};

const ctof = function(celsius) {
  let f = (celsius * (9 / 5) + 32).toFixed(1);
  return parseFloat(f);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
