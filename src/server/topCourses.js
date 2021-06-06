const mongoose = require("mongoose");
var topCourses = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  c_id: String,
  c_name: String,
  c_price: String,
});

module.exports = mongoose.model("PureTopCourses", topCourses);