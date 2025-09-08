module.exports = {
  books: (author, _, { db }) => db.books.filter(b => b.authorId === author.id),
  publishedYears: (author, _, { db }) => {
    const years = db.books
      .filter(b => b.authorId === author.id && Number.isInteger(b.publishedYear))
      .map(b => b.publishedYear);
    return Array.from(new Set(years)).sort((a, b) => a - b);
  },
};
