const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numberArray) {
  let sum = 0;
	for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
  }
  return sum;
};

const multiply = function(numberArray) {
  let mul = numberArray[0];
  for (let i = 1; i < numberArray.length; i++) {
    mul *= numberArray[i];
  }
  return mul;
};

const power = function(a, b) {
  let p = 1;
	for (let i = 0; i < b; i++) {
    p *= a;
  }
  return p;
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  }
  let f = a;
	for (let i = a - 1; i > 1; i--) {
    f *= i;
  }
  return f;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
