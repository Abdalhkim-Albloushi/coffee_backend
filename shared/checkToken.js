require("dotenv").config();

const jwt = require("jsonwebtoken");

const ApiError = require("./apiError");

exports.checkToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return next(new ApiError(`Unauthenticated`, 401));
  }

  jwt.verify(token, process.env.TOKEN_KEY, (err) => {
    if (err) {
      return next(new ApiError(`Unauthenticated`, 403));
    }

    next();
  });
};


