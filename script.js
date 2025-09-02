const myLibrary = [];

function Book(title, author, date) {
    // the constructor...
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.date = date;
}

function addBookToLibrary(title, author, date) {
    // take params, create a book then store it in the array
    let newBook = new Book(title, author, date);
    myLibrary.push(newBook);
    console.log("New Book added to Library: ")
    console.dir(newBook);
}

addBookToLibrary("Dune", "Frank Herbert", "1967");