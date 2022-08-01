const express = require("express");
const BooksController = require("../Controllers/BooksController");
const OtherRouters = express.Router();

//Books
OtherRouters.post("/add-books", BooksController.addBooks);
OtherRouters.get("/books", BooksController.getBooks);

//Services
// OtherRouters.post("/add-books", BooksController.addBooks);
// OtherRouters.get("/books", BooksController.getBooks);

//Testimonials
// OtherRouters.post("/add-books", BooksController.addBooks);
// OtherRouters.get("/books", BooksController.getBooks);

//Practice
// OtherRouters.post("/add-books", BooksController.addBooks);
// OtherRouters.get("/books", BooksController.getBooks);

//News
// OtherRouters.post("/add-books", BooksController.addBooks);
// OtherRouters.get("/books", BooksController.getBooks);

module.exports = OtherRouters;
