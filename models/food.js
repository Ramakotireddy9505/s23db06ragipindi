const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  costume_type: String,
  size: String,
  cost: {
    type: Number,
    min: 0,
    max: 600,}
});

module.exports = mongoose.model("Food", foodSchema);
