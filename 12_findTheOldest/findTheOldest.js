
let oldestPersonObject = null //This varible takes in an object.
let nameOfPerson = '' //This variable is initialised to store a name. 
let recentOldestPerson = 0 //Variable reinitialises the recent person age to zero.
let  currentDate = new Date(); //Variable with the date method.

const findTheOldest = function(people) {

    for(person of people){
        nameOfPerson = person.name;
        dateOfBirth = person.yearOfBirth;
        dateOfDeath = person.yearOfDeath;

        if( dateOfDeath === undefined ){ //Compares if the date of death is not mentioned or non existent.
            dateOfDeath = currentDate.getFullYear();// If the date of death is non existent it means that the person is still alive , hence it uses the current year.
        }

        let currentOldestPerson = dateOfDeath - dateOfBirth;//Performs logical calculations to calculate the oldest from the date of birth from the date of death.

        if(currentOldestPerson > recentOldestPerson){ //Perfoms comparison as to if the current oldest person is older than recent person.
            recentOldestPerson = currentOldestPerson;// If so , then the current oldest person is redeclared to be the recent oldest person.
            oldestPersonObject = person;// Retrieves the current person object.
    }
}
    return oldestPersonObject; //returns object.
    }
// Do not edit below this line
module.exports = findTheOldest;
