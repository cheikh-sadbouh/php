const mongoose = require("mongoose");

const parkAnimalsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, " Animal name is required "]
  },
  picture: {
    type: String,
    required: [true, "Animal picture is required "]
  },
  description: {
    type: String,
    required: [true, " Animal description is required "]
  },
});

const parkSchema = new mongoose.Schema({
  parkName: {
    type: String,
    unique: true,
    required: [true, " park Name is required "]

  },
  state: {
    type: String,
    required: [true, " park state is required "]
  },
  picture: {
    type: String,
    required: [true, " Park picture is required "]
  },
  parkAnimals: {
    type: [parkAnimalsSchema],
    require: [true, " park Animals is required "]
  },
});

mongoose.model(
  process.env.PARK_DOCUMENT,
  parkSchema,
  process.env.NATUREPARK_COLLECTION
);

const parkModel = function () {
  return mongoose.model(process.env.PARK_DOCUMENT);
}
module.exports = {
  getModel: parkModel
}
