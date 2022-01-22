const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  companyName: String,
  discription: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
