const removeFromArray = function(arr, removed, removed2){
    lengthOfArray = arr.length;
    const newArray = []
    for(let i = 1; i <= lengthOfArray; i++){
        if (i != removed  && i != removed2){
            newArray.push(i)
        }
    }
    return newArray
};

removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
// removeFromArray([1, 2, 3, 4], 3);
// removeFromArray([1, 2, 3, 4], 3);
// removeFromArray([1, 2, 3, 4], 3);
// removeFromArray([1, 2, 3, 4], 3);
// removeFromArray([1, 2, 3, 4], 3);
// removeFromArray([1, 2, 3, 4], 3);
// removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
