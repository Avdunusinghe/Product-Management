const express = require("express");
const router = express.Router();

const {
  saveProduct,
  getAllProductDetails,
} = require("../controllers/Product.controllers");

router.post("/add", saveProduct);
router.get("/all", getAllProductDetails);

module.exports = router;

//common js
