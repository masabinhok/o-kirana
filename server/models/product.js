const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  unit: { type: String },
  quantity: { type: Number },
  productImage: { type: String, default: "/logo.png" },
  category: { type: String },
});

module.exports = mongoose.model("product", productSchema);
