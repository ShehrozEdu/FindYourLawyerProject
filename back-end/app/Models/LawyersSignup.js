const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LawyerSchema = new Schema({
  FirstName: { type: String },
  LastName: { type: String },
  Email: { type: String },
  Password: { type: String },
  ContactNo: { type: Number },
  Specialty: { type: String, enum: "Criminal , Civil , Real Estate" },
});

const LawyerModel = mongoose.model("lawyer", LawyerSchema);

module.exports = LawyerModel;
