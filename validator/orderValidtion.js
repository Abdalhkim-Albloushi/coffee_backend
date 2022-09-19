const { check } = require("express-validator");

const validator = require("../error/middelWairValidator");

// const order = require("../model/order_model");

exports.createOrderVali = [
  check("username")
    .notEmpty()
    .withMessage("username is require")
    .bail()
    .isLength({ min: 2 })
    .withMessage("Too short username")
    .bail()
    .isLength({ max: 25 })
    .withMessage("Too long username"),

  check("table").isLength({ max: 8 }).withMessage("Too long Ar table"),

  check("totalprice")
    .notEmpty()
    .withMessage("totalprice is require")

    .bail()
    .isLength({ max: 6 })
    .withMessage("Too long totalprice"),

  check("carNumber")
    .isLength({ min: 2 })
    .withMessage("Too short carNumber")
    .bail()

    .bail()
    .isLength({ max: 25 })
    .withMessage("Too long carNumber"),

  check("note").isLength({ max: 150 }).withMessage("Too long carNumber"),

  check("status")
    .notEmpty()
    .withMessage("status is require")

    .bail()
    .isLength({ max: 10 })
    .withMessage("Too long totalprice"),

  validator,
];

// exports.allProductVali = [
//   check("id").isMongoId().withMessage("Invalid ID"),
//   validator,
// ];

// exports.updateProductVali = [
//   check("id").isMongoId().withMessage("Invalid ID"),
//   validator,
// ];

// exports.deleteProductVali = [
//   check("id").isMongoId().withMessage("Invalid ID"),
//   validator,
// ];
