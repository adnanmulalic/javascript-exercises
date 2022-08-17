const reverseString = function(text) {
    let newText = "";
    for (let i = text.length - 1; i >= 0; i--) {
        newText += text[i];
    }
    return newText;
};

// Do not edit below this line
module.exports = reverseString;
