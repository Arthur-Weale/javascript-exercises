



const repeatString = function(greeting, numOfTimes) {

    if (numOfTimes < 0){
        return 'ERROR'
    }

    stringToBeReturned = ""
    for( let i = 0; i < numOfTimes; i++){
        
        stringToBeReturned += greeting;
    }
    return stringToBeReturned;
};

repeatString('hey', 3) // returns 'heyheyhey'
repeatString('hello', 10) // returns 'hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello'
repeatString('hi', 1) // returns 'hi'
repeatString('bye', 0) // returns ''
repeatString('goodbye', -1) // returns 'ERROR'
repeatString('', 10) // returns ''
repeatString('odin') // returns 'odin*999'



// Do not edit below this line
module.exports = repeatString;
