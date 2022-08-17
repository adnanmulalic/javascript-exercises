const removeFromArray = function(firstArray, numb) {
    const newArray = [];
    firstArray.forEach(element => {
        if (element != numb) {
            newArray.push(element);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
