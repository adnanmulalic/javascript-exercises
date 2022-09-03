const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    const fibNums = [];
    let firstNumber = 0;
    let secondNumber = 1;
    let sum = 1;
    for (let i = 0; i < num - 1; i++) {
        sum = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = sum;
  }
  return sum;
};

// Do not edit below this line
module.exports = fibonacci;
