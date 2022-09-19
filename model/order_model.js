const mongoose = require("mongoose");

const SomeModelSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "username must be required"],
      minlength: [2, "username must be more then 3"],
      maxLength: [25, " username must be less than 20"],
    },
    table: {
      type: String,

      maxLength: [8, " table must be less than 8"],
    },
    totalprice: {
      type: String,
      require: [true, "price must be required"],

      maxLength: [6, " price must be less than 6"],
    },

    carNumber: {
      type: String,
      minlength: [2, "name must be more then 3"],
      maxLength: [25, " name must be less than 7"],
    },

    note: {
      type: String,
      maxLength: [150, "note must be less than 100 word"],
    },
    status: {
      type: String,
      require: [true, "status is required"],

      maxLength: [10, " status must be less than 10"],
    },
    product: {
      type: Array,
      required: [true, "Product  is required"],
      productName: {
        type: String,
      },
      productPrice: {
        type: String,
      },
      qty: {
        type: String,
        minlength: 1,
        maxlength: 5,
      },
      sizes: {
        type: String,
        minlength: 1,
        maxlength: 5,
        default: "M",
      },
    },
    addmore: {
      type: Array,
      title: {
        type: String,
      },
      price: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

const categoryModel = mongoose.model("order", SomeModelSchema);

module.exports = categoryModel;
