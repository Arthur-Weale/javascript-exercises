

const books = [
    {
    title: 'Book',
    author: 'Name'
    },
    {
    title: 'Book2',
    author: 'Name2'
    }
]

const getTheTitles = function(books) {
    for(aTitle of books){
        bookTitle = aTitle.filter(title);
        console.log(bookTitle);
        //return bookTitle;
    }

};
getTheTitles(books)
// Do not edit below this line
//module.exports = getTheTitles;
