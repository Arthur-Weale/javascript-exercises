//Reverse String function
const reverseString = function(string) {
    //String is split into an array and reversed and then joined together.
    splitString = string.split("").reverse().join("");
    return splitString;
};
// Do not edit below this line
module.exports = reverseString;
