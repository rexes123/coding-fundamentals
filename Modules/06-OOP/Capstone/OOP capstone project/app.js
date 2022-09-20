class Library {
    constructor(name) {
        this.name = name;
        this.books = [];

    }

    addBook(New) {
        return this.books.push(New)
    }
    getBooks() {
        const bracket = [];

        for (let newBooks of this.books) {
            bracket.push(newBooks.name);
        }

        return bracket;
    }

    getBooksByCategory(Horror) {
        const bracket = [];
        const bookfilter = this.books.filter(book => book.category === Horror);

        for (let categoryBook of bookfilter) {
            bracket.push(categoryBook.name);
        }

        return bracket;
    }

}

class Book {
    constructor(name, author, category) {
        this.name = name;
        this.author = author;
        this.category = category;

    }
}


const library = new Library('ABC')

const bookA = new Book('Book A', 'Mr. A', 'Sci-Fi')
const bookB = new Book('Book B', 'Mr. B', 'Sci-Fi')
const bookD = new Book('Book C', 'Mr. C', 'Horror')
library.addBook(bookA)
library.addBook(bookB)
library.addBook(bookD)

const allBooks = library.getBooks()
const horrorBooks = library.getBooksByCategory('Horror')

console.log(allBooks) // ['Book A', 'Book B', 'Book C']
console.log(horrorBooks) // ['Book C']

