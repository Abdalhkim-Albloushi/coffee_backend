const CategoryModel = require("../model/category_model");

const sharFunctions = require("./shareFunction");

exports.getCategory = sharFunctions.getAll(CategoryModel);

exports.postCategory = sharFunctions.createOne(CategoryModel);

exports.findCategory = sharFunctions.findOne(CategoryModel);

exports.updateCategory = sharFunctions.updateOne(CategoryModel);

exports.deleteCategory = sharFunctions.deleteOne(CategoryModel);
