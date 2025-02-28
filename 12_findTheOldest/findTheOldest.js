
currentDate = new Date()
const getAge = function(birth, death){
    if (!death){
        death = currentDate.getFullYear();
    }
    return death - birth;
}

const findTheOldest = function (people) {
    return people.reduce((recentPerson, currentPerson) => {
        const oldestRecentPerson = getAge(recentPerson.yearOfBirth, recentPerson.yearOfDeath);
        const oldestCurrentPerson = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        if (oldestRecentPerson < oldestCurrentPerson){
            return currentPerson;
        }
        else 
            return recentPerson;
    })
};
// Do not edit below this line
module.exports = findTheOldest;
