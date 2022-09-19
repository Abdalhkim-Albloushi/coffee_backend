const ProductModel = require("../model/product_model");

const sharFunctions = require("./shareFunction");

exports.getProduct = sharFunctions.getAll(ProductModel);

exports.createProduct = sharFunctions.createOne(ProductModel);

exports.findProduct = sharFunctions.findOne(ProductModel);

exports.updateProduct = sharFunctions.updateOne(ProductModel);

exports.deleteProduct = sharFunctions.deleteOne(ProductModel);
