const myLibrary = [];

function Book(title, author, pageCount, readStatus) {
    this.title = title;             //string
    this.author = author;           //string
    this.pageCount = pageCount;     //int
    this.readStatus = readStatus;   //boolean
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
    myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const theNameOfTheWind = new Book("The Name of the Wind", "Patrick Rothfuss", 662, true);
const bloodOfElves = new Book("Blood of Elves", "Andrzej Sapkowski", 320, true);

addBookToLibrary(theHobbit);
addBookToLibrary(theNameOfTheWind);
addBookToLibrary(bloodOfElves);

function displayBooks (library) {

    library.forEach(book => {
        const container = document.querySelector(".container");
        const card = document.createElement("div");
        card.className = "card";
        const title = document.createElement("h3");
        title.className = "title";
        const author = document.createElement("p");
        author.className = "author";
        const pageCount = document.createElement("p");
        pageCount.className = "pageCount";
        const readStatus = document.createElement("p");
        readStatus.className = "readStatus";

        title.textContent = book.title;
        author.textContent = book.author;
        pageCount.textContent = book.pageCount;
        book.readStatus === true ? readStatus.textContent = "Read" : readStatus.textContent = "Not yet read";

        container.appendChild(card);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pageCount);
        card.appendChild(readStatus);
    });

}

displayBooks(myLibrary);

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
// console.log(theHobbit.info()); "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"