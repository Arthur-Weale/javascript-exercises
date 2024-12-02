// const people = [
//     {
//     name: "Carly",
//     yearOfBirth: 2018,
//     },
//     {
//     name: "Ray",
//     yearOfBirth: 1962,
//     yearOfDeath: 2011,
//     },
//     {
//     name: "Jane",
//     yearOfBirth: 1912,
//     yearOfDeath: 1941,
//     },
// ]

let oldestPersonObject = null
let nameOfPerson = ''
let recentOldestPerson = 0
let  currentDate = new Date();

const findTheOldest = function(people) {

    for(person of people){
        nameOfPerson = person.name;
        dateOfBirth = person.yearOfBirth;
        dateOfDeath = person.yearOfDeath;

        if( dateOfDeath === undefined ){
            dateOfDeath = currentDate.getFullYear();
        }
            //console.log(dateOfDeath);

        let currentOldestPerson = dateOfDeath - dateOfBirth;
            // console.log(nameOfPerson);
            // console.log(recentOldestPerson);
            // console.log(currentOldestPerson);

        if(currentOldestPerson > recentOldestPerson){
            recentOldestPerson = currentOldestPerson;
            oldestPersonObject = person;
    }
}
    // console.log(`The oldest is : ${recentOldestPerson}`)
    // console.log(oldestPersonObject);
    return oldestPersonObject;
    }
//findTheOldest(people);
//console.log();
// Do not edit below this line
module.exports = findTheOldest;
