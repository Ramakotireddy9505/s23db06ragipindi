const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const accountSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 20
  },
  password: {
    type: String,
    required: true,
    minlength: 6  // You can adjust this based on your requirements
  }
});

accountSchema.plugin(passportLocalMongoose);

// We export the Schema to avoid attaching the model to the
// default mongoose connection.
module.exports = mongoose.model("Account", accountSchema);
