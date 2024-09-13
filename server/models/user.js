const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,

    unique: true,
  },
  password: {
    type: String,
  },
  salt: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    default: "CUSTOMER",
  },
  profileImageURL: {
    type: String,
    default: "default.png",
  },
  phoneNumber: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
