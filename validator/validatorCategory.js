const { check } = require("express-validator");

const validator = require("../error/middelWairValidator");

exports.findCategoryVali = [
  check("id").isMongoId().withMessage("category Id is wrong please try agian"),
  validator,
];

exports.createCategoryVali = [
  check("names")
    .notEmpty()
    .withMessage("Category name is required")
    .bail()
    .isLength({ min: 3 })
    .withMessage("can't be less than 3 ")
    .bail()
    .isLength({ max: 25 })
    .withMessage("can't be more than 20")
    .bail(),
  check("nameAr")
    .notEmpty()
    .withMessage("Category Ar name  is required")
    .bail()
    .isLength({ min: 3 })
    .withMessage("can't be less than 3 ")
    .bail()
    .isLength({ max: 25 })
    .withMessage("can't be more than 20"),
  validator,
];

exports.updateCategoryVali = [
  check("id").isMongoId().withMessage("Invalid ID").bail(),
  validator,
];

exports.deleteCategoryVali = [
  check("id").isMongoId().withMessage("Invalid Id"),
  validator,
];
