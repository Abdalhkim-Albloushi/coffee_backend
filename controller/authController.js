require("dotenv").config();

const asyncHandler = require("express-async-handler");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const ApiError = require("../shared/apiError");

const AuthModel = require("../model/authRegester_model");

exports.createUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    next(new ApiError("Sorry, all input required", 400));
  }

  const hash = await bcrypt.hash(password, 10);
  req.body.password = hash;

  const createItem = await AuthModel.create(req.body);

  res.status(201).json({ data: createItem });
});

exports.loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate user input
  if (!(email && password)) {
    next(new ApiError("Sorry, all input required", 400));
  }

  const user = await AuthModel.findOne({ email });

  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    // Create token

    const token = jwt.sign({ email, password }, process.env.TOKEN_KEY);

    // save user token
    user.token = token;

    // user

    return res.status(200).json({ data: user });
  }
  res.status(400).send({ status: 0, data: "Invalid Credentials" });
});
