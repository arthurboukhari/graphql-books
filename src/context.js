const authors = require('./data/authors');
const books = require('./data/books');
const createLoaders = require('./utils/dataloaders');

module.exports = function createContext({ req }) {
  const db = { authors, books };
  const loaders = createLoaders(db);
  const user = null; // si un jour tu fais de l’auth

  return { req, db, loaders, user };
};
