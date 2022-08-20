const removeFromArray = function(firstArray, ...args) {
    const argsArray = args;
    //argsArray.sort();
    console.log(args);
    for (let i = 0; i < argsArray.length; i++) {
        for (let y = 0; y < firstArray.length; y++) {
            if (argsArray[i] === firstArray[y]) {
                firstArray.splice(firstArray.indexOf(firstArray[y]), 1);
            }
        }  
    }
return firstArray;
};

// Do not edit below this line
module.exports = removeFromArray;
