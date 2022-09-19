const express = require("express");

const {
  createSubCategoryVali,
  updateSubCatecoryVali,
  delateSubCategoryVali,
} = require("../validator/sbuCategoryValidator");
const {
  createSubCategory,
  allSub,
  updateSubCatecory,
  deleteSubCategory,
  findSubCategory,
} = require("../controller/subCategoryController");

const route = express.Router({ mergeParams: true });

route.route("/").get(allSub).post(createSubCategoryVali, createSubCategory);
route.route("/:id").get(findSubCategory);

route.route("/update/:id").post(updateSubCatecoryVali, updateSubCatecory);
route.route("/delete/:id").post(delateSubCategoryVali, deleteSubCategory);

module.exports = route;
