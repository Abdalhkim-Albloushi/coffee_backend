const { check } = require("express-validator");

const validator = require("../error/middelWairValidator");

const category = require("../model/category_model");

const subCat = require("../model/subCategory_model");

const brand = require("../model/brand_model");

exports.createProductVali = [
  check("title")
    .notEmpty()
    .withMessage("title is require")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Too short title")
    .bail()
    .isLength({ max: 30 })
    .withMessage("Too long title"),
  check("titleAr")
    .notEmpty()
    .withMessage("Ar title is require")
    .bail()
    .isLength({ min: 3 })
    .withMessage(" Too short Ar title")
    .bail()
    .isLength({ max: 30 })
    .withMessage("Too long Ar title"),
  check("description")
    .notEmpty()
    .withMessage("description is require")
    .bail()
    .isLength({ min: 10 })
    .withMessage("Too short description")
    .bail()
    .isLength({ max: 150 })
    .withMessage("Too long description"),

  check("sold").optional().isNumeric().withMessage("Sold must be number"),
  check("price")
    .notEmpty()
    .withMessage("Price is required")
    .bail()
    .isNumeric()
    .withMessage("Price must be number")
    .bail()
    .isLength({ max: 10 })
    .bail()
    .withMessage("Price too long"),
  check("priceafterdescount")
    .optional()
    .isNumeric("priceafterdescount must be number"),
  check("sizes").optional().isArray().withMessage("sizes must be an array"),
  check("images").optional().isArray().withMessage("images must be an array"),
  check("bgImage").notEmpty().withMessage("bgImage is required"),
  check("categorid")
    .notEmpty()
    .withMessage("categorid is required")
    .bail()
    .isMongoId()
    .withMessage("Invalid categor Id")
    .bail()
    .custom((val) =>
      category.findById(val).then((user) => {
        if (!user) {
          return Promise.reject(new Error("This category ID not found"));
        }
      })
    ),
  check("subCategoryid")
    .optional()
    .isMongoId()
    .withMessage("Invalid subCategory Id")
    .bail()
    .custom((val) =>
      subCat.find({ _id: { $exists: true, $in: val } }).then((user) => {
        if (!Array.isArray(val)) {
          val = [val];
        }
        if (user.length < 1 || user.length !== val.length) {
          return Promise.reject(
            new Error("This SubCategory ID not found or not array of subCat")
          );
        }
      })
    ),
  check("brandid")
    .optional()
    .isMongoId()
    .withMessage("Invalid brand Id")
    .bail()
    .custom((val) =>
      brand.findById(val).then((user) => {
        if (!user) {
          return Promise.reject(new Error("This brand ID not found"));
        }
      })
    ),
  check("rateAvrage")
    .optional()
    .isNumeric()
    .withMessage("rateAvrage must be number")
    .bail()
    .isLength({ min: 1 })
    .withMessage("rateAvrage must be between 1 - 5")
    .bail()
    .isLength({ max: 5 })
    .withMessage("rateAvrage must be between 1 - 5"),
  check("rateQty").optional().isNumeric().withMessage("rateQty must be number"),

  validator,
];

exports.allProductVali = [
  check("id").isMongoId().withMessage("Invalid ID"),
  validator,
];

exports.updateProductVali = [
  check("id").isMongoId().withMessage("Invalid ID"),
  validator,
];

exports.deleteProductVali = [
  check("id").isMongoId().withMessage("Invalid ID"),
  validator,
];
