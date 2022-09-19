
const BrandModel = require("../model/brand_model");

const sharFunctions = require("./shareFunction");

exports.getBrand = sharFunctions.getAll(BrandModel);

exports.createBrand = sharFunctions.createOne(BrandModel);

exports.findBrand = sharFunctions.findOne(BrandModel);

exports.updateBrand = sharFunctions.updateOne(BrandModel);

exports.deleteBrand = sharFunctions.deleteOne(BrandModel);
