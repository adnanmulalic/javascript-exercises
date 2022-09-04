const findTheOldest = function(people) {
    const ageNameArray = people.map((person) => {
        return {
            name: person.name,
            age: person.yearOfDeath - person.yearOfBirth,
        };
    });
    let currentOldest = ageNameArray[0].age;
    const oldestPerson = ageNameArray.filter((person) => {
        if (person.age > currentOldest) {
            currentOldest = person.age;
            return person;
        }
    })
    if (oldestPerson[0] === undefined) {
        return ageNameArray[0];
    } else {    
    return oldestPerson[0];
    }
};

// Do not edit below this line
module.exports = findTheOldest;
