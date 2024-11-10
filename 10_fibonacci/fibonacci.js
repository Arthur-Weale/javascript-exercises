
let firstPrecedingValue = 0;
let secondPrecedingValue = 1;
let newPrecedingValue = 0;
const fibonacciArray = [];

const fibonacci = function(fibonacciValue) {
    fibonacciArray.push(secondPrecedingValue);
    
    for(i = 1; i < fibonacciValue; i++){

        newPrecedingValue = firstPrecedingValue + secondPrecedingValue;
        firstPrecedingValue = secondPrecedingValue;
        secondPrecedingValue = newPrecedingValue;
        fibonacciArray.push(newPrecedingValue);
    }
    console.log(fibonacciArray);
    let fibonacciArrayLength = fibonacciArray.length;

    if(fibonacciArrayLength == fibonacciValue){
        let actualfibonacciValue = fibonacciArray[fibonacciValue]; 
    }
    //return actualfibonacciValue;
};

console.log(fibonacci(4))
// Do not edit below this line
//module.exports = fibonacci;
