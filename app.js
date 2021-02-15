let myLibrary = [];
const booksContent = document.querySelector('.myBooks');
const formSubmitButton = document.querySelector('.submitButton')
let formTitle = document.getElementById('title');
let formAuthor = document.getElementById('author');
let formPages = document.getElementById('pages');
let formRead = document.getElementById('read');
let formCoverImage = document.getElementById('coverImageUrl');

let title;
let author;
let read;
let url;
let pages;

formSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    title = formTitle.value;
    author = formAuthor.value;
    pages = formPages.value;
    read = formRead.value;
    url = formCoverImage.value;
    const book = new Book(title, author, pages, read, url);
    console.log(title);
    addBookToPage(book)
})

function paintOnPage() {
    console.log(myLibrary[myLibrary.length-1].author)
    addBookToPage(myLibrary[myLibrary.length-1])
}

function resetInput() {
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
console.log(author);
booksContent.innerHTML += `
<div class="card" style="width: 18rem;">
        <img src="${this.coverImageUrl}" class="card-img-top" alt="${this.title}">
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          <p class="card-text">by ${this.author}, ${this.pages} pages, is ${this.read}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
      resetInput();
}
   