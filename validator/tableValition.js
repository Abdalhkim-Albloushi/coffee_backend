const { check } = require("express-validator");


const validator = require("../error/middelWairValidator");


exports.createtableVali = [
  check("tables")
    .notEmpty()
    .withMessage("brand is required"),
    
  validator,
];