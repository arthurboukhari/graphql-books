const { UserInputError } = require('apollo-server-express');

let lastIds = { author: 2, book: 3 }; // exemple simple

module.exports = {
  addAuthor: (_, { input }, { db }) => {
    const name = input.name?.trim();
    if (!name) throw new UserInputError('name requis');

    const author = { id: String(++lastIds.author), name };
    db.authors.push(author);
    return author;
  },

  addBook: (_, { input }, { db }) => {
    const { title, authorId, publishedYear } = input;
    if (!title?.trim()) throw new UserInputError('title requis');
    const author = db.authors.find(a => a.id === authorId);
    if (!author) throw new UserInputError(`Auteur introuvable: ${authorId}`);

    const book = {
      id: String(++lastIds.book),
      title: title.trim(),
      authorId,
      publishedYear: Number.isInteger(publishedYear) ? publishedYear : null,
    };
    db.books.push(book);
    return book;
  },

  deleteBook: (_, { id }, { db }) => {
    const idx = db.books.findIndex(b => b.id === id);
    if (idx === -1) return false;
    db.books.splice(idx, 1);
    return true;
  },
};
