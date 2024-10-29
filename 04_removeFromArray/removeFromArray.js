const removeFromArray = function(arr, removed, removed2, removed3, removed4){
    lengthOfArray = arr.length;
    const newArray = []
    for(let i = 1; i <= lengthOfArray; i++){
        if (i != removed  && i != removed2 && i != removed3  && i != removed4){
            newArray.push(i)
        }
    }
    return newArray
};

removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
//removeFromArray([1, 2, 2, 3], 2);
removeFromArray([1, 2, 3, 4], 7, "tacos");
removeFromArray([1, 2, 3, 4], 7, 2);
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
removeFromArray(["hey", 2, 3, "ho"],"hey", 3);
removeFromArray([1, 2, 3], "1", 3);
// removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
