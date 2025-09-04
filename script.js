const myLibrary = [];

function Book(title, author, date) {
    // the constructor...
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.date = date;
    this.display = false;
}

function addBookToLibrary(title, author, date) {
    // take params, create a book then store it in the array
    let newBook = new Book(title, author, date);
    myLibrary.push(newBook);
    //console.log("New Book added to Library: ")
    //console.dir(newBook);
}

addBookToLibrary("Dune", "Frank Herbert", "1967");
addBookToLibrary("Dune: Messiah", "F Herbert", "1977");
addBookToLibrary("A Game of Thrones", "GRR Martin", "1994");
addBookToLibrary("A Clash of Kings", "George RR Martin", "2000");

const bookDisplay = document.querySelector(".bookDisplay");

function createBookPropElement(tableRow, bookObj, prop){
    let tableCell = document.createElement("td");
    tableCell.classList.add(prop);
    tableCell.textContent = bookObj[prop];
    tableRow.append(tableCell);
}

function createBookElement(bookObj){
    let tableRow = document.createElement("tr");
    tableRow.setAttribute('data-id', bookObj.id);
    createBookPropElement(tableRow, bookObj, "title");
    createBookPropElement(tableRow, bookObj, "author");
    createBookPropElement(tableRow, bookObj, "date");
    return tableRow
}

function displayAllBooks(library){
    library.forEach(book => {
        bookDisplay.appendChild(createBookElement(book));
        book.display = true;
    });
}

displayAllBooks(myLibrary);

function updateDisplay(library) {
    library.forEach(book => {
        if(book.display) return
        bookDisplay.appendChild(createBookElement(book))
        book.display = true;
    })
}


const newBookModal = document.querySelector(".newBookModal");

const openModalBtn = document.querySelector("#openModalBtn");
const closeModalBtn = document.querySelector("#closeModalBtn");
const confirmBtn = document.querySelector("#confirmBtn");

openModalBtn.addEventListener("click", e => newBookModal.showModal());
closeModalBtn.addEventListener("click", e => {
    e.preventDefault();
    newBookModal.close()
});

confirmBtn.addEventListener("click", e => {
    e.preventDefault(); // stop form submitting
    const bookTitleInput = document.querySelector("#bookTitle");
    const bookAuthorInput = document.querySelector("#bookAuthor");
    const bookDateInput = document.querySelector("#bookDate");

    addBookToLibrary(bookTitleInput.value, bookAuthorInput.value, bookDateInput.value);

    bookTitleInput.value = "";
    bookAuthorInput.value = "";
    bookDateInput.value = "";

    newBookModal.close()

    updateDisplay(myLibrary)
})