const { check } = require("express-validator");

const asyncHandler = require("express-async-handler");

const validator = require("../error/middelWairValidator");

const AuthModel = require("../model/authRegester_model");

exports.createUserValidtion = [
  check("firstName")
    .notEmpty()
    .withMessage(" First name is required")
    .bail()
    .isLength({ max: 20 })
    .withMessage("Too long First name"),
  check("lastName")
    .notEmpty()
    .withMessage(" Last name is required")
    .bail()
    .isLength({ max: 20 })
    .withMessage("Too long  Last name"),
  check("email")
    .notEmpty()
    .withMessage(" email is required")
    .bail()
    .isEmail()
    .withMessage(" Enter correct email")
    .bail()
    .isLength({ max: 50 })
    .withMessage("Too long email")
    .bail()
    .isLength({ min: 10 })
    .withMessage("Too short email")
    .bail()
    .custom(
      asyncHandler(async (val, { req }) => {
        const findItem = await AuthModel.findOne({ email: val });
        if (findItem) {
          return Promise.reject(new Error("email already in use"));
        }
        return true;
      })
    ),
  check("password")
    .notEmpty()
    .withMessage(" Password is required")
    .bail()
    .isLength({ max: 50 })
    .withMessage("Too long Password")
    .bail()
    .isLength({ min: 8 })
    .withMessage("weak Password"),

  validator,
];

exports.loginUserValidation = [
  check("email")
    .notEmpty()
    .withMessage(" email is required")
    .bail()
    .isEmail()
    .withMessage(" enter correct email")
    .bail()
    .isLength({ max: 50 })
    .withMessage("Too long email")
    .bail()
    .custom(
      asyncHandler(async (val, { req }) => {
        const findItem = await AuthModel.findOne({ email: val });
        
        if (!findItem) {
          return Promise.reject(new Error("email  incorrect"));
        }
        return true;
      })
    ),
  check("password")
    .notEmpty()
    .withMessage("password is required")
    .bail()

    .isLength({ max: 50 })
    .withMessage("password incorrect")
    .bail()
    .isLength({ min: 8 })
    .withMessage("password incorrect")
    .bail(),
  validator,
];
