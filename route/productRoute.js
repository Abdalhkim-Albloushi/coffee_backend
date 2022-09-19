const express = require("express");

const route = express.Router();

const {
  createProductVali,
  updateProductVali,
  deleteProductVali,
} = require("../validator/productValidation");

const {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  findProduct,
} = require("../controller/productController");

const { checkToken } = require("../shared/checkToken");

route
  .route("/")
  .get(getProduct)
  .post(checkToken, createProductVali, createProduct);

route
  .route("/:id")
  .get(deleteProductVali, findProduct)
  .patch(checkToken, updateProductVali, updateProduct)
  .delete(checkToken, deleteProductVali, deleteProduct);

module.exports = route;
