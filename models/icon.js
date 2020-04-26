const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Icon = new Schema({
  icon: {
    type: String,
    required: true,
  },
});
module.exports = {
  Icon,
};
