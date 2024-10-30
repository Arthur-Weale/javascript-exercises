const removeFromArray = function(arr, removed, removed2, removed3, removed4){
    lengthOfArray = arr.length;
    valuesInArray = arr.values();
    const newArray = []
    //for(let i = 1; i <= lengthOfArray; i++){
    for(let value of arr){
        if (value !== removed  && value !== removed2 && value !== removed3  && value !== removed4){
            newArray.push(value)
        }
    }
    return newArray
};

removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1, 2, 2, 3], 2);
removeFromArray([1, 2, 3, 4], 7, "tacos");
removeFromArray([1, 2, 3, 4], 7, 2); 
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
removeFromArray(["hey", 2, 3, "ho"],"hey", 3);
removeFromArray([1, 2, 3], "1", 3);
// Do not edit below this line
module.exports = removeFromArray;
