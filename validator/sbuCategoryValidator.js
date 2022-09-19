const { check } = require("express-validator");

const asyncHandler = require("express-async-handler");

const validator = require("../error/middelWairValidator");

const SubtModel = require("../model/subCategory_model");

exports.createSubCategoryVali = [
  check("names")
    .notEmpty()
    .withMessage("Category required")
    .bail()
    .custom(
      asyncHandler(async (val) => {
        const findItem = await SubtModel.findOne({ names: val });

        if (findItem) {
          return Promise.reject(new Error("Name already in use"));
        }
        return true;
      })
    ),
  check("names")
    .isLength({ min: 2 })
    .withMessage("can't be less than 3 ")
    .bail(),
  check("names")
    .isLength({ max: 25 })
    .withMessage("can't be more than 20")
    .bail(),
  check("categoryid").isMongoId().withMessage("Invalid Category Id"),
  validator,
];

exports.updateSubCatecoryVali = [
  check("id").isMongoId().withMessage("Invalid Id"),
  validator,
];

exports.delateSubCategoryVali = [
  check("id").isMongoId().withMessage("Invalid Id"),
  validator,
];
