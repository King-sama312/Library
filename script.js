const myLibrary = []

function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}


function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead)
    myLibrary.push(newBook)
    console.log(myLibrary)
}

function displayBooks() {
    const container = document.querySelector(".books-container")
    container.innerHTML = ''


myLibrary.forEach((book) => {
    const bookCard = document.createElement('div')
    bookCard.classList.add('book-card')

    bookCard.innerHTML = `
    <h3>${book.title}</h3> 
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
    <p>Status: ${book.isRead ? 'Read' : 'Not Read'}</p>
    `

    container.appendChild(bookCard)
})
}

addBookToLibrary('My Title', 'Author Name', 300, true)
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, true);
addBookToLibrary('1984', 'George Orwell', 328, false);
displayBooks();