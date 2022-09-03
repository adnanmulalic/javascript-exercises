const puncMarks = [".",",",":",";","?","!","...",'"',"'","/"," "];
const palindromes = function (text) {
    text = text.toLowerCase();
    let textArray = [];
    for (let i = 0; i < text.length; i++) {
        textArray.push(text[i]);   
    }
    let cleanText = "";
    for (let i = 0; i < textArray.length; i++) {
        let hasPuncMark = false;
        for (let j = 0; j < puncMarks.length; j++) {
            if (textArray[i] === puncMarks[j]) {
                hasPuncMark = true;
            }
        }
        if (hasPuncMark === false) {
            cleanText += textArray[i];
        }   
    }
    let reverseText = "";
    for (let i = cleanText.length - 1; i >= 0; i--) {
        reverseText += cleanText[i];        
    }
    if (cleanText === reverseText) {
        console.log(cleanText, "<==>", reverseText);
        return true;
    } else {
        console.log(cleanText, "<==>", reverseText);
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
