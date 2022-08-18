/* const removeFromArray = function(firstArray, numb) {
    const newArray = [];
    firstArray.forEach(element => {
        if (element != numb) {
            newArray.push(element);
        }
    });
    return newArray;
}; */

const removeFromArray = function(firstArray, ...args) {
        let newArray = [];
        const argsArray = args;
        firstArray.forEach(element => {
            for (let i = 0; i < argsArray.length; i++) {
                console.log(argsArray[i]);
                newArray.push(element);
                if (element === argsArray[i]) {
                    newArray.pop(element);
                }
            }
        });
    console.log(newArray);
    
};

// Do not edit below this line
module.exports = removeFromArray;
