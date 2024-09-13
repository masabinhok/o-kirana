const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
  },
  secretKey: {
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
  photneNumber: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
