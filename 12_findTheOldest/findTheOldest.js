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

let oldestPersonObject = null
let nameOfPerson = ''

const findTheOldest = function(people) {

    let currentOldestPerson = 0
    let recentOldestPerson = 0
    
    for(person of people){
        nameOfPerson = person.name;
        dateOfBirth = person.yearOfBirth;
        dateOfDeath = person.yearOfDeath;

        currentOldestPerson = dateOfDeath - dateOfBirth;
        //console.log(currentOldestPerson)
        if(recentOldestPerson > currentOldestPerson){
            currentOldestPerson = recentOldestPerson;
            console.log(currentOldestPerson);
        }
    }
    //console.log(`The oldest is : ${currentOldestPerson}`)
    }
findTheOldest(people);
console.log();
// Do not edit below this line
//module.exports = findTheOldest;
