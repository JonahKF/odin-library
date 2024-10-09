const myLibrary = [];

function Book(title, author, pageCount, readStatus) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
    this.info = function() {
        if(this.readStatus === true) {
            return `${this.title} by ${this.author}, ${this.pageCount} pages, already read.`
        }
        else if(this.readStatus === false) {
            return `${this.title} by ${this.author}, ${this.pageCount} pages, not yet read.`
        }
    }
}

function addBookToLibrary (book) {

}

function displayBooks (library) {
    
}


// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
// console.log(theHobbit.info()); "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"