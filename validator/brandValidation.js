const { check } = require("express-validator");

const asyncHandler = require("express-async-handler");

const validator = require("../error/middelWairValidator");

const BrandModel = require("../model/brand_model");

exports.createbrandVali = [
  check("brand")
    .notEmpty()
    .withMessage("brand is required")
    .bail()
    .isLength({ min: 3 })
    .withMessage("can't be less than 3 ")
    .bail()
    .isLength({ max: 25 })
    .withMessage("can't be more than 20")
    .bail()
    .custom(
      asyncHandler(async (val, { req }) => {
        console.log(val);
        const findItem = await BrandModel.findOne({ brand: val });
        console.log(findItem);
        if (findItem) {
          return Promise.reject(new Error("brand already in use"));
        }
        return true;
      })
    ),
  validator,
];

exports.updateBrandVali = [
  check("id").isMongoId().withMessage("Invalid Id"),
  validator,
];

exports.delateBrandVali = [
  check("id").isMongoId().withMessage("Invalid Id"),
  validator,
];
