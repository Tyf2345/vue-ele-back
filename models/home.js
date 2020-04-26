const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Card = new Schema({
  name: {
    type: String,
    required: true,
  },
  num: {
    type: Number,
    required: true,
  },
});

module.exports = {
  Card,
};
