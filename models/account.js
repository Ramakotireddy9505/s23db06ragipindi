const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const accountSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,

  },
  password: {
    type: String
  }
});

accountSchema.plugin(passportLocalMongoose);

// We export the Schema to avoid attaching the model to the
// default mongoose connection.
module.exports = mongoose.model("Account", accountSchema);
