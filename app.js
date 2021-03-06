let myLibrary = [];
document
    .querySelector('.submitButton')
    .addEventListener("click", submitBook);
  
function submitBook(e) {
    e.preventDefault();
    const book = getBook();
    addBookToLibrary(book);
    addBookToPage(book);
}

function getBook() {
    let formTitle = document.getElementById('title');
    let formAuthor = document.getElementById('author');
    let formPages = document.getElementById('pages');
    let formRead = document.getElementById('read');
    let formCoverImage = document.getElementById('coverImageUrl');
    const book = new Book(formTitle.value, formAuthor.value, formPages.value, formRead.value, formCoverImage.value);
    formTitle.value = "";
    formAuthor.value = "";
    formPages.value = "";
    formRead.value = "";
    formCoverImage.value = "";
    return book;
}


function Book(title, author, pages, read, coverImageUrl) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.coverImageUrl = coverImageUrl;
}

function addBookToLibrary(book) {
    myLibrary.push({title: book.title, author: book.author, pages: book.pages, read: book.read, coverImageUrl: book.coverImageUrl});
}

function lookUpBook(book){
    return myLibrary.findIndex(x => x.title === book.title);
}

function addBookToPage(book) {
    const booksContent = document.querySelector('.myBooks');
    const idx = lookUpBook(book);
    booksContent.innerHTML += `
    <div data-bookid="${idx}" class="card idx${idx}" style="width: 18rem;">
            <img src="${book.coverImageUrl}" class="card-img-top" alt="${book.title}">
            <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">by ${book.author}, ${book.pages} pages, is ${book.read}</p>
            <div class="row Justify-center-items">
            <a href="#" class="btn btn-primary removeBtn col-6">Remove Book From Library</a>
            <a href="#" class="btn btn-success changeBtn col-6">Change Read Status</a>
            </div>
            </div>
        </div>`
    document
        .querySelector('.removeBtn')
        .addEventListener("click", () => {
          document.querySelector(`.idx${idx}`).remove();
          myLibrary.splice(idx, 1);
        })
    document
        .querySelector('.changeBtn')
        .addEventListener("click", () => {
            document.querySelector(`.idx${idx}`).remove();
          if (myLibrary[idx].read === "Read") {
              myLibrary[idx].read = "Not Read";
              addBookToPage(myLibrary[idx]);
          }
          else {
            myLibrary[idx].read = "Read";
            addBookToPage(myLibrary[idx]);
          }
        //   addBookToPage(book);
        })    
}
   