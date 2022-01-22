const Product = require("../../productManagement.Models/models/Product.model");

const saveProduct = (request, response) => {
  const { name, companyName, discription } = request.body;

  const product = new Product({
    name,
    companyName,
    discription,
  });

  product
    .save()
    .then((product) => {
      response.json(product);
    })
    .catch((error) => {
      response.json(error);
    });
};

const getAllProductDetails = (request, response) => {
  Product.find()
    .then((products) => {
      response.json(products);
    })
    .catch((error) => {
      response.json(error);
    });
};

module.exports = {
  saveProduct,
  getAllProductDetails,
};
