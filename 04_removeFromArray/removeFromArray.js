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
        const argsArray = Array.from(args);
        firstArray.forEach(element => {
            console.log(firstArray.indexOf(element));
            for (let i = 0; i < argsArray.length; i++) {
                console.log(argsArray[i]);
                if (element === argsArray[i]) {
                    newArray.push(element);
                }
            }
        });
    console.log(newArray);
    let finalArray = [];
    for (let i = 0; i < firstArray.length; i++) {
        for (let y = 0; y < newArray.length; y++) {
            if (firstArray[i] != newArray[y]) {
                finalArray.push(firstArray[i]);
            }
        }       
    }
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
