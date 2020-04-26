const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", function () {
  console.log("连接失败");
});
db.once("open", function () {
  console.log("连接成功");
});

module.exports = db;
