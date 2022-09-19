const SubCatModel = require("../model/subCategory_model");

const sharFunctions = require("./shareFunction");

exports.allSub = sharFunctions.getAll(SubCatModel);

exports.createSubCategory = sharFunctions.createOne(SubCatModel);

exports.findSubCategory = sharFunctions.findOne(SubCatModel);

exports.updateSubCatecory = sharFunctions.updateOne(SubCatModel);

exports.deleteSubCategory = sharFunctions.deleteOne(SubCatModel);
