const palindromes = function (string){
    let punc = /[.!, ]/g
    const oldString = string.trim().replace(punc,'');
    const newString = string.trim().replace(punc,'').split("").reverse().join("");
        console.log(oldString);
        if(oldString.toLowerCase() === newString.toLowerCase()){
            return true;
        }else 
            return false;
};

// Do not edit below this line
module.exports = palindromes;
