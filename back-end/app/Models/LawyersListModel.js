const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LawyersListSchema = new Schema({
  count: {
    type: Number,
  },

  name: {
    type: String,
  },
  email: {
    type: String,
  },
  state: {
    type: String,
  },
  image: {
    type: String,
  },
  zipcode: {
    type: String,
  },
  phone: {
    type: String,
  },
  practice: {
    type: String,
  },
});

const LawyersList = mongoose.model("LawyerList", LawyersListSchema);

module.exports = LawyersList;
