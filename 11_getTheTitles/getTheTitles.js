//New array re-initialises a new array.
let newArray = [];
//Function to be called, contains block of code.
const getTheTitles = function(books) {
    //for(aTitle of books){//Iterates through elements in an array.
    //    bookTitle = aTitle.title;
    //    newArray.push(bookTitle);//Puts a title into New Array.
    //}
    //return newArray;
    return books.map((booktitle) =>  booktitle.title)
};

// Do not edit below this line
module.exports = getTheTitles;
