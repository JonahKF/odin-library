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
    const container = document.querySelector(".container");
    container.replaceChildren();

    library.forEach(book => {
        const card = document.createElement("div");
        card.className = "card";
        card.id = library.indexOf(book);
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
        pageCount.textContent = book.pageCount + " pages";
        book.readStatus === true ? readStatus.textContent = "Read" : readStatus.textContent = "Not yet read";

        container.appendChild(card);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pageCount);
        card.appendChild(readStatus);

        const buttonContainer = card.appendChild(document.createElement("div"));
        buttonContainer.className = "button-container";
        const deleteButton = buttonContainer.appendChild(document.createElement("button"));
        deleteButton.className = "delete-button";
        deleteButton.id = library.indexOf(book);
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", (btnClick) => {
            document.getElementById(deleteButton.id).remove();
        });

        const readButton = buttonContainer.appendChild(document.createElement("button"));
        readButton.className = "read-button";
        readButton.textContent = "Read";

    });
}

displayBooks(myLibrary);

// Form Behavior
let bookForm = document.getElementById("book-form");
bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let newTitle = document.getElementById("title");
    let newAuthor = document.getElementById("author");
    let newPageCount = document.getElementById("page-count");
    let newReadStatus = document.getElementById("read-status-1");
    console.log(newReadStatus.value);

    newReadStatus.checked === true ? newReadStatus = true : newReadStatus = false;
    console.log(newReadStatus);

    let newBook = new Book(newTitle.value, newAuthor.value, newPageCount.value, newReadStatus);

    addBookToLibrary(newBook);
    displayBooks(myLibrary);

    newTitle.value = "";
    newAuthor.value = "";
    newPageCount.value = "";
    newReadStatus.value = "";
});