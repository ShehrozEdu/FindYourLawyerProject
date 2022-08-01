const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const practiceSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },

  subtitle: {
    type: String,
    required: [true, "Subtitle is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  image: {
    type: String,
  },
});

const Books = mongoose.model("Practice", practiceSchema);

module.exports = Books;
