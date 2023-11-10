const mongoose = require("mongoose")
const foodSchema = mongoose.Schema({
costume_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("Food",
foodSchema)