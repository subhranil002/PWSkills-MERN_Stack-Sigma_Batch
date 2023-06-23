const books = [
    {
        title: "Book 1",
        author: "Author 1",
        year: 2020,
    },
    {
        title: "Book 2",
        author: "Author 2",
        year: 2018,
    },
    {
        title: "Book 3",
        author: "Author 3",
        year: 2005,
    },
    {
        title: "Book 4",
        author: "Author 4",
        year: 2008,
    },
    {
        title: "Book 5",
        author: "Author 5",
        year: 2015,
    },
];

const filteredBooks = books.filter((book) => {
    return book.year > 2010;
});

const editedAuthor = filteredBooks.map((book) => {
    return {
        title: book.title,
        author: book.author.toUpperCase(),
        year: book.year,
    };
});

console.log(editedAuthor);
