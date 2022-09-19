const express = require("express");

const route = express.Router();

const { createUser, loginUser } = require("../controller/authController");

const {
  createUserValidtion,
  loginUserValidation,
} = require("../validator/authValition");

route.route("/login").post(loginUserValidation, loginUser);

route.route("/register").post(createUserValidtion, createUser);

module.exports = route;
