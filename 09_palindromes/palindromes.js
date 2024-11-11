const palindromes = function (string){
    let punc = /[.!, ]/g;//variable contains punctuation marks to be ignore.
    const oldString = string.trim().replace(punc,'');//Removes white spaces using the trim built in function and uses replace to replace the punctuction marks with an empty space.
    const newString = string.trim().replace(punc,'').split("").reverse().join("");//Does much of whats being done above and splits the string into an array of elements and reverses and joins together at the end.
        //Using strict operator to compare if both cases are equal.
        if(oldString.toLowerCase() === newString.toLowerCase()){
            return true;
        }else 
            return false;
};
// Do not edit below this line
module.exports = palindromes;
