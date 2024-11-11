//Sum all function.
const sumAll = function(start, end) {
    //Re-initialising the final sum variable to zero.
    let finalSum = 0;
    //checks if start is an integer or if less than 1 and retuns "ERROR" if one of the option is true.
    if(Number.isInteger(start) === false || Number.isInteger(end) === false || start < 1 ){
        return 'ERROR';
    //If start is less than or equal to 1 then logic add 1 to finalSum.
    }else if(start <= 1){ 
        for(let i = start; i <= end; i++ ){
            finalSum += i;//Increments
        }
    }
    else if(start > 1){
        for(let i = start; i >= end; i-- ){
            finalSum += i;
        }
    }
    return finalSum; //Returns final sum
};
// Do not edit below this line
module.exports = sumAll;
