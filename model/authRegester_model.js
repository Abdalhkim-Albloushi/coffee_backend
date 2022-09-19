const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    maxlength: [20, "Too long first Name"],
  },
  lastName: {
    type: String,
    require: [true, "First Name is require"],
    maxlength: [20, "Too long first Name"],
  },
  email: {
    type: String,
    require: [true, "email is required"],
    maxlength: [50, "Too long email"],
    minlength: [10, "Too short email"],
    unique: [true, "Email must be unique"],
  },
  password: {
    type: String,
    maxlength: [100, "Too long password"],
    minlength: [8, "Too short password"],
    require: [true, "Password is required"],
  },
  token: {
    type: String,
  },
});

const regesterModel = mongoose.model("user", registerSchema);

module.exports = regesterModel;
