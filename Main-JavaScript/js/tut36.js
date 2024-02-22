console.log("Hey Welcome to the tut36.js in this tut we can create the --Library Class Implementation Exercise 4: Solution in JavaScript-- this tut is 32 also");
/*

Create a class library and implement the following:--
constructor must take the book list as an argument
getBookList();
issueBook(bookName, user)
return(bookName)

*/

class Library {
    constructor(bookList) {
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    getBookList() {
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookName, user) {
        if (this.bookList[bookName] == undefined) {
            this.bookList[bookName] = user;
            console.log(`${bookName} book is issued Now`);
        }
        else {
            console.log("This book is already issued");
        }
    }

    return(bookName) {
        delete this.issuedBooks[bookName];
        console.log("Book is return Now");
    }
}