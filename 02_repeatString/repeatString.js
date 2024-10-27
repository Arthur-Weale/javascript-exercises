



const repeatString = function(greeting, numOfTimes) {
    stringToBeReturned = ""
    number = ""
    for( let i = 0; i < numOfTimes; i++){
        
        stringToBeReturned += greeting;
    }
    return stringToBeReturned;
};

repeatString('hey', 3) // returns 'heyheyhey'
repeatString('hello', 10) // returns 'heyheyhey'
repeatString('hi', 1) // returns 'heyheyhey'
repeatString('bye', 0) // returns 'heyheyhey'
repeatString('goodbye', -1) // returns 'heyheyhey'
repeatString('', 10) // returns 'heyheyhey'
repeatString('odin', number) // returns 'heyheyhey'
// repeatString('hey', 3) // returns 'heyheyhey'
// repeatString('hey', 3) // returns 'heyheyhey'
// repeatString('hey', 3) // returns 'heyheyhey'
// repeatString('hey', 3) // returns 'heyheyhey'



// Do not edit below this line
module.exports = repeatString;
