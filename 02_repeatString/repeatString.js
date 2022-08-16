const repeatString = function(text, num) {
  let newText = "";
  let i = 0;
  while (i < num) {
    newText += text;
    i++;
  }
  return newText;
};

repeatString("hey", 3);
// Do not edit below this line
module.exports = repeatString;
