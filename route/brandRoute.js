const express = require("express");

const {
  createbrandVali,
  updateBrandVali,
  delateBrandVali,
} = require("../validator/brandValidation");
const {
  getBrand,
  createBrand,
  updateBrand,
  deleteBrand,
  findBrand,
} = require("../controller/brandController");

const route = express.Router();

route.route("/").get(getBrand).post(createbrandVali, createBrand);

route.route("/delete/:id").post(delateBrandVali, deleteBrand);
route.route("/update/:id").post(updateBrandVali, updateBrand);
route.route("/find/:id").get(updateBrandVali, findBrand);

module.exports = route;
