let myLibrary = [];
const booksContent = document.querySelector('.myBooks');
const formSubmitButton = document.querySelector('.submitButton')

let title;
let author;
let read;
let url;
let pages;

function testSubmit (e) {
    e.preventDefault();
    console.log(e);
}

formSubmitButton.addEventListener("click", submitBook);

function submitBook(e) {
    e.preventDefault();
    let formTitle = document.getElementById('title').value;
    let formAuthor = document.getElementById('author').value;
    let formPages = document.getElementById('pages').value;
    let formRead = document.getElementById('read').value;
    let formCoverImage = document.getElementById('coverImageUrl').value;
    const book = new Book(formTitle, formAuthor, formPages, formRead, formCoverImage);
    console.log(book);
    addBookToPage(book);
    resetInput();
}

function paintOnPage() {
    console.log(myLibrary[myLibrary.length-1].author)
    addBookToPage(myLibrary[myLibrary.length-1])
}

function resetInput() {
    let formTitle = document.getElementById('title');
    let formAuthor = document.getElementById('author');
    let formPages = document.getElementById('pages');
    let formRead = document.getElementById('read');
    let formCoverImage = document.getElementById('coverImageUrl');
    formTitle.value = "";
    formAuthor.value = "";
    formPages.value = "";
    formRead.value = "";
    formCoverImage.value = "";
}

function Book(title, author, pages, read, coverImageUrl) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.coverImageUrl = coverImageUrl;
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, is ${this.read} `
}

function addBookToLibrary(book) {
    myLibrary.push({title: this.title, author: this.author, pages: this.pages, read: this.read});
}

Book.prototype.addBookToLibrary = addBookToLibrary;
Book.prototype.addBookToPage = addBookToPage;

function addBookToPage(book) {
    console.log(book.author);
    booksContent.innerHTML += `
    <div class="card" style="width: 18rem;">
            <img src="${book.coverImageUrl}" class="card-img-top" alt="${book.title}">
            <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">by ${book.author}, ${book.pages} pages, is ${book.read}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`
}
   