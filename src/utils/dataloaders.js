const DataLoader = require('dataloader');

function authorByIdLoader(db) {
  return new DataLoader(async (ids) => {
    const map = new Map(db.authors.map(a => [a.id, a]));
    return ids.map(id => map.get(id) || null);
  });
}

module.exports = (db) => ({
  authorById: authorByIdLoader(db),
});
