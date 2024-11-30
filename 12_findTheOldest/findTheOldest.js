const people = [
    {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
{
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
]

let nameOfPerson = ''
let currentOldestPerson = 0
let recentOldestPerson = 0

const findTheOldest = function(people) {
    for(person of people){
        nameOfPerson = people.name;
        dateOfBirth = people.yearOfBirth;
        dateOfDeath = people.yearOfDeath;

        currentOldestPerson = dateOfBirth - dateOfDeath;
            console.log(currentOldestPerson);
    }
    }
findTheOldest(people);
console.log(person);
// Do not edit below this line
//module.exports = findTheOldest;
