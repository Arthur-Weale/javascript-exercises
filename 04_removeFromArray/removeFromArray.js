const removeFromArray = function(arr, removed, removed2, removed3, removed4){ //parameters are placeholders for the values passed when the function is called.
    lengthOfArray = arr.length;

    const newArray = [] // declares and initialises a new array with the name "newArray" where new elements will be added.
    //The for loop below is different from the increment loop , this one iterates through the values inside the elements.
    for(let value of arr){
        if (value !== removed  && value !== removed2 && value !== removed3  && value !== removed4){ //a strict operator was used "!==" , this does not do any conversions like the loose operator "==".
            newArray.push(value)// adds the value into the new array.
        }
    }
    return newArray// returns the new array.
};
// Do not edit below this line
module.exports = removeFromArray;
