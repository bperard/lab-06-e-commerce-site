import { books } from './data.js';
import { shelveBook } from './build-shelf.js';

const bookshelf = document.querySelector('#bookshelf');
const bookCatalog = books;

for (let book of bookCatalog) {
    const newBook = shelveBook(book);
    bookshelf.append(newBook);
}
