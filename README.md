# 📚 GraphQL Books API

Une petite API **GraphQL** construite avec **Apollo Server + Express** permettant de gérer une collection de **livres** et **auteurs** célèbres (*Sun Tzu, J.K. Rowling, Stephen King, Victor Hugo…*).  
Le but : apprendre et pratiquer les concepts fondamentaux de GraphQL (**types, queries, mutations, résolveurs, relations, filtres, erreurs**).

---

## 🚀 Fonctionnalités

- ✅ **Query de test** : `hello`  
- ✅ **Types GraphQL** : `Book`, `Author`  
- ✅ **Relations** :  
  - `Book.author` → renvoie l’auteur du livre  
  - `Author.books` → renvoie les livres de l’auteur  
  - `Author.publishedYears` → années uniques des publications  
- ✅ **Mutations** :  
  - `addAuthor` → ajouter un auteur  
  - `addBook` → ajouter un livre (erreur si auteur inexistant)  
  - `deleteBook` → supprimer un livre  
- ✅ **Filtres** : recherche par année, mot-clé dans le titre, auteur  
- ✅ **Données en mémoire** : auteurs & livres célèbres (Rowling, Sun Tzu, King, Shelley, Hugo, etc.)

---

## 🛠️ Installation

```bash
# 1. Cloner le projet
git clone <url-du-repo>
cd graphql-books

# 2. Installer les dépendances
npm install

# 3. Installer nodemon pour le mode dev
npm install --save-dev nodemon
```

---

## ▶️ Lancer le serveur

### Mode normal
```bash
npm start
```

### Mode développement (auto-reload)
```bash
npm run dev
```

Le serveur démarre sur 👉 [http://localhost:4000/graphql](http://localhost:4000/graphql)

---

## 🧪 Exemples de requêtes GraphQL

### Hello
```graphql
query {
  hello
}
```

### Tous les auteurs avec leurs livres
```graphql
query {
  authors {
    name
    books {
      title
      publishedYear
    }
    publishedYears
  }
}
```

### Les livres de Victor Hugo
```graphql
query {
  author(id: "6") {
    name
    books {
      title
      publishedYear
    }
  }
}
```

### Ajouter un auteur
```graphql
mutation {
  addAuthor(input: { name: "Albert Camus" }) {
    id
    name
  }
}
```

### Ajouter un livre (lié à un auteur existant)
```graphql
mutation {
  addBook(input: { title: "L'Étranger", authorId: "7", publishedYear: 1942 }) {
    id
    title
    publishedYear
    author {
      name
    }
  }
}
```

### Supprimer un livre
```graphql
mutation {
  deleteBook(id: "3")
}
```

---

## 📂 Structure du projet

```
src/
  server.js            # Point d'entrée du serveur
  context.js           # Contexte partagé (db, loaders, etc.)
  data/
    authors.js         # Données simulées d'auteurs
    books.js           # Données simulées de livres
  schema/
    typeDefs.js        # Schéma GraphQL (types, queries, mutations)
  resolvers/
    index.js           # Regroupe tous les résolveurs
    Query.js
    Mutation.js
    Book.js
    Author.js
  utils/
    dataloaders.js     # DataLoader pour optimiser les relations
```

---

## 📖 Auteurs & Livres inclus (exemple)

- Sun Tzu → *L’Art de la guerre*  
- J.K. Rowling → *Harry Potter à l’école des sorciers*  
- Stephen King → *Ça*, *Shining*  
- Mary Shelley → *Frankenstein*  
- Bram Stoker → *Dracula*  
- Victor Hugo → *Les Misérables*, *Notre-Dame de Paris*  

---

## 🎯 Objectif pédagogique

- Comprendre la base de GraphQL : **types, résolveurs, queries, mutations**  
- Manipuler des **relations** (one-to-many)  
- Ajouter des **filtres** et gérer les **erreurs**  
- Structurer un projet proprement (schema, resolvers, data, utils)

---

## 🖼️ Aperçu

![GraphQL Logo](https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg)
