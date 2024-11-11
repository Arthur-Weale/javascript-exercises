
let firstPrecedingValue = 0;
let secondPrecedingValue = 1;
let newPrecedingValue = 0;
const fibonacciArray = []; //Re-initiallizes a new array.

const fibonacci = function(fibonacciValue) {
    fibonacciArray.push(firstPrecedingValue); // adds the first digit 0 in the array.
    fibonacciArray.push(secondPrecedingValue); // add the second digit 1 in the array.

//Pre-Check if the fibonacci value is less than 0. 
    if(fibonacciValue < 0)return "OOPS";
// For loop to iterate and make values to be generated.
    for(i = 0; i < 26; i++){
        newPrecedingValue = firstPrecedingValue + secondPrecedingValue; // logic to add the two preceding values.
        firstPrecedingValue = secondPrecedingValue; //This creates a shift to make the second value the first value.
        secondPrecedingValue = newPrecedingValue; //This creates a shift to make the new value calculated to be the second value.
        fibonacciArray.push(newPrecedingValue);
    }
    let actualFibonacciValue = fibonacciArray[fibonacciValue];
    return actualFibonacciValue;
};
// Do not edit below this line
module.exports = fibonacci;
