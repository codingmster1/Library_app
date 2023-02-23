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
    static displayBooks() {
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
       },
       {
       title: 'Return To The Black Farm',
       author: 'Elias Witherow',
       pages: '280'
       },
       {
        title: 'To Be Devoured',
        author: 'Sara Tantlinger',
        pages: '130'
       },
       {
        title: 'Fear and Trembling',
        author: 'Kierkegaard',
        pages: '200'
       },
       {
       title: 'The Language of Argument',
       author: 'Larry W. Burton',
       pages: '120'
    }
    
];

    
const books = StoredBooks;

books.forEach((book) => UI.addBookToList(book));

}

static addBookToList(book) {
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

document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event Class: Add a Book

document.querySelector('#book-form').addEventListener('submit', (e) => 
{

    //Prevent actual submit
    e.preventDefault();



    //Get form values

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;

    const book = new Book(title, author, pages);

    console.log(book)

});



//Event Class: Remove a Book

