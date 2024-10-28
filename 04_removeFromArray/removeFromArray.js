const removeFromArray = function(arr, removed){
    lengthOfArray = arr.length;
    const newArray = []
    for(let i = 1; i <= lengthOfArray; i++){
        if (i != removed){
            newArray.push(i)
        }
    }
    return newArray
};

removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
