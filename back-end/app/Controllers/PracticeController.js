const expressAsyncHandler = require("express-async-handler");
const PracticeModel = require("../Models/PracticeModel");
const Practice = require("../Resources/Practice.json");

const PracticeController = {
  getPractice: expressAsyncHandler(async function (req, res) {
    try {
      let result = await PracticeModel.find();
      res.status(200).send({
        status: true,
        Practice: result,
      });
    } catch (error) {
      res.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  }),

  addPractice: expressAsyncHandler(async function (req, res) {
    try {
      let result = await PracticeModel.insertMany(Practice);
      res.status(200).send({
        status: true,
        message: "Practices added successfully",
        result,
      });
    } catch (error) {
      res.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  }),
};

module.exports = PracticeController;
