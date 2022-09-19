const mongoose = require("mongoose");

const subScham = new mongoose.Schema(
  {
    names: {
      type: String,
      trim: true,
      unique: [true, "Sub Category must be unique"],

      minlength: [2, "to short subCategory name"],
      maxLength: [25, "to long subCategory name"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    categoryid: {
      type: mongoose.Schema.ObjectId,
      ref: "category",
      required: [true, "subCategory must be belong to parent Category"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("subcategory", subScham);
