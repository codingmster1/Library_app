//console.log("hello");

//Book Class

class Book
{
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

//UI Class

class UI {
    static displayBook() {
        const StoredBooks = [
        {
        title: 'The Black Farm',
        author: 'Elias Witherow',
        pages: '257'
        },
        {
        title: 'Berserk Deluxe Edition',
        author: 'Kentaro Muira',
        pages: '250'
    }
];

const books = StoredBooks;

books.forEach((book) => UI.addBookToList(books));

}

addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);

}

}

//Store class: Local Storage

//Event Class: Display Book

//Event Class: Add a Book

//Event Class: Remove a Book

