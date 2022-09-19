const { validationResult } = require("express-validator");

const validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const listError = [];
    errors.array().forEach((element) => {
      listError.push(`${element.param} : ${element.msg}`);
    });
    console.log(listError);
    return res.status(400).json({ errors: listError });
  }
  next();
};

module.exports = validator;
