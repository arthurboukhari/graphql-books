const { gql } = require('apollo-server-express');

module.exports = gql`
  type Book {
    id: ID!
    title: String!
    publishedYear: Int
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
    books: [Book!]!
    publishedYears: [Int!]!
  }

  type Query {
    hello: String!
    books(publishedYear: Int, titleContains: String, authorId: ID): [Book!]!
    book(id: ID!): Book
    authors: [Author!]!
    author(id: ID!): Author
  }

  input AddAuthorInput {
    name: String!
  }

  input AddBookInput {
    title: String!
    authorId: ID!
    publishedYear: Int
  }

  type Mutation {
    addAuthor(input: AddAuthorInput!): Author!
    addBook(input: AddBookInput!): Book!
    deleteBook(id: ID!): Boolean!
  }
`;
