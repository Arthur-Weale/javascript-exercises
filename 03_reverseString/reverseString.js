const reverseString = function(string) {
    splitString = string.split("").reverse().join("");
    return splitString;
};

reverseString('hello')
reverseString('hello there')
// Do not edit below this line
module.exports = reverseString;
