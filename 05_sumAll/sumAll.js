const sumAll = function(a, b) {
    if (Number.isInteger(a) && a > 0 && Number.isInteger(b) && b > 0) {
        if (a > b) {
            let c = a;
            a = b;
            b = c;
        }
        let sum = 0;
        for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
