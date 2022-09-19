const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minLength: [3, "Too short product title"],
      mxnLength: [30, "Too long product title"],
    },
    titleAr: {
      type: String,
      required: true,
      trim: true,
      minLength: [3, "Too short product title"],
      mxnLength: [30, "Too long product title"],
    },
    description: {
      type: String,
      required: [true, " description is required"],
      minLength: [10, "Too short product description"],
      mxnLength: [150, "Too long product description"],
    },  
    sold: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "price is required"],
      trim: true,
      max: [5000, "Too Long product price"],
    },
    priceafterdescount: {
      type: Number,
    },
    sizes: {
      type: Array,
      title: {
        type: String,
        minlength: 1,
        maxlength: 20,
        default: "null",
      },
      price: {
        type: String,
        minlength: 1,
        maxlength: 5,
        default: "0",
      },
    },
    addmore: {
      type: Array,
      title: {
        type: String,
        minlength: 1,
        maxlength: 20,
      },
      price: {
        type: String,
        minlength: 1,
        maxlength: 5,
      },
    },
    images: [String],
    bgImage: {
      type: String,
      required: [true, "Product Image is required"],
    },
    categorid: {
      type: mongoose.Schema.ObjectId,
      ref: "category",
      required: [true, "Product must be belong to Category"],
    },
    subCategoryid: {
      type: [mongoose.Schema.ObjectId],
      ref: "subcategory",
    },
    brandid: {
      type: mongoose.Schema.ObjectId,
      ref: "brand",
    },
    rateAvrage: {
      type: Number,
      min: [1, "Rate must be between 1 and 5"],
      max: [5, "Rate must be between 1 and 5"],
    },
    rateQty: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
