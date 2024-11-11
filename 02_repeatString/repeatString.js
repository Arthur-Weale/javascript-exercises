//Function for repeat strings.
const repeatString = function(greeting, numOfTimes) {
    //Pre-Check conditional parses "numOfTimes" parameter and checks if its less than zero and returns string that say "Errors".
    if (numOfTimes < 0){
        return 'ERROR'
    }

    stringToBeReturned = "" //Re-Initialises variable into an empty variable.
    //Loop iterates a number of times and adds a greeting.
    for( let i = 0; i < numOfTimes; i++){
        stringToBeReturned += greeting;
    }
    return stringToBeReturned;
};
// Do not edit below this line
module.exports = repeatString;
