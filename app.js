function makeBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

makeBook.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, is ${this.read} `
}

