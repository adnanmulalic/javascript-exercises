const palindromes = function (text) {
    //let pattern = /[a-zA-Z]/g;
    let reverseText = "";
    for (let i = text.length - 1; i >= 0; i--) {
        reverseText += text[i];        
    }
    if (reverseText === text) {
        console.log(text, "<==>", reverseText);
        return true;
    } else {
        console.log(text, "<==>", reverseText);
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
