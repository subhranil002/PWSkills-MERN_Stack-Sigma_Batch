function processBooks(books, callback) {
    const bookTitles = books.map((book) => book.title);
    return callback(bookTitles);
}

function processBookCallback(bookTitles) {
    return bookTitles.sort();
}

const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        year: 1932,
    },
];

console.log(processBooks(books, processBookCallback));
