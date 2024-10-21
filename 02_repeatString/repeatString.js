



const repeatString = function(greeting, numOfTimes) {
    stringToBeReturned = ""
    for( let i = 0; i < numOfTimes; i++){
        
        stringToBeReturned += greeting;
    }
    return stringToBeReturned;
};

repeatString('hey', 3) // returns 'heyheyhey'


// Do not edit below this line
module.exports = repeatString;
