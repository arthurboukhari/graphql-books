module.exports = {
  author: (book, _, { loaders }) => loaders.authorById.load(book.authorId),
};
