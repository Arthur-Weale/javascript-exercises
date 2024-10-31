

const sumAll = function(start, end) {
    let finalSum = 0;
    if(Number.isInteger(start) === false || Number.isNaN(end) === false || start < 1 ){
        return 'ERROR';
    }else if(start <= 1){ 
        for(let i = start; i <= end; i++ ){
            finalSum += i;
        }
    }else if(start > 1){
        for(let i = end; i <= start; i++ ){
            finalSum += i;
        }
    }
    return finalSum;
};

sumAll(1, 4)
sumAll(1, 4000)
sumAll(123, 1)
sumAll(-10, 4)
sumAll(2.5, 4)
sumAll(10, "90")
sumAll(10, [90, 1])
// Do not edit below this line
module.exports = sumAll;
