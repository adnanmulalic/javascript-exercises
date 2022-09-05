const findTheOldest = function(people) {
    const ageNameArray = people.map((person) => {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }
        return {
            name: person.name,
            age: person.yearOfDeath - person.yearOfBirth,
        };
    });
    console.table(ageNameArray);
    let currentOldest = ageNameArray[0].age;
    let oldestPersonObj = {};
    ageNameArray.filter((person) => {
        if (person.age > currentOldest) {
            currentOldest = person.age;
            oldestPersonObj[0] = person;
        }
    })
    if (oldestPersonObj[0] === undefined) {
        return ageNameArray[0];
    } else {    
    return oldestPersonObj[0];
    }
};

// Do not edit below this line
module.exports = findTheOldest;
