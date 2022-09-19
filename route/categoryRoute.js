const express = require("express");

const route = express.Router();

const {
  findCategoryVali,
  createCategoryVali,
  updateCategoryVali,
  deleteCategoryVali,
} = require("../validator/validatorCategory");

const {
  postCategory,
  getCategory,
  findCategory,
  updateCategory,
  deleteCategory,
} = require("../controller/categoryController");

const { checkToken } = require("../shared/checkToken");

route
  .route("/")
  .get(getCategory)
  .post(checkToken, createCategoryVali, postCategory);

route.route("/:id").get(findCategoryVali, findCategory);
route.route("/:id").patch(checkToken, updateCategoryVali, updateCategory);
route.route("/:id").delete(checkToken, deleteCategoryVali, deleteCategory);

module.exports = route;
