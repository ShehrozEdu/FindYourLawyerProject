const express = require("express");
const OtherRouters = express.Router();
const BooksController = require("../Controllers/BooksController");
const ServicesController = require("../Controllers/ServicesController");
const TestimonialsController = require("../Controllers/TestimonialsController");
const PracticeController = require("../Controllers/PracticeController");
const NewsController = require("../Controllers/NewsController");
const LawyersListController = require("../Controllers/LawyersListControllers");

//Books
OtherRouters.post("/add-books", BooksController.addBooks);
OtherRouters.get("/books", BooksController.getBooks);

//Services
OtherRouters.post("/add-services", ServicesController.addServices);
OtherRouters.get("/services", ServicesController.getServices);

//Testimonials
OtherRouters.post("/add-testimonials", TestimonialsController.addTestimonials);
OtherRouters.get("/testimonials", TestimonialsController.getTestimonials);

//Practice
OtherRouters.post("/add-practices", PracticeController.addPractice);
OtherRouters.get("/practices", PracticeController.getPractice);
OtherRouters.get(
  "/getpracticebytitle",
  PracticeController.getLocationByPracticeName
);

//News
OtherRouters.post("/add-news", NewsController.addNews);
OtherRouters.get("/news", NewsController.getNews);

//LawyersList
OtherRouters.post("/add-LawyersList", LawyersListController.addLawyersList);
OtherRouters.get("/lawyersList", LawyersListController.getLawyersList);

module.exports = OtherRouters;
