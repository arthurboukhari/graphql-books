module.exports = {
  hello: () => 'Hello world!',
  books: (_, args, { db }) => {
    const { publishedYear, titleContains, authorId } = args;
    let result = db.books;

    if (publishedYear != null) result = result.filter(b => b.publishedYear === publishedYear);
    if (titleContains) {
      const q = titleContains.toLowerCase();
      result = result.filter(b => b.title.toLowerCase().includes(q));
    }
    if (authorId) result = result.filter(b => b.authorId === authorId);

    return result;
  },
  book: (_, { id }, { db }) => db.books.find(b => b.id === id) || null,
  authors: (_, __, { db }) => db.authors,
  author: (_, { id }, { db }) => db.authors.find(a => a.id === id) || null,
};
