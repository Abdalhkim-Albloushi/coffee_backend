const { urlencoded } = require("express");

const express = require("express");

const app = express();

const multer = require("multer");

const uploade = multer();

require("./config/databases");
const ApiError = require("./shared/apiError");

const categoryRoute = require("./route/categoryRoute");

const subCategoryRoute = require("./route/subCatRoute");

const brandRoute = require("./route/brandRoute");

const productRoute = require("./route/productRoute");
const gError = require("./error/error");

const findSubCat = require("./route/subCatRoute");
const tableRoute = require("./route/tableRoute");

const authRoute = require("./route/authRoute");
const orderRoute = require("./route/orderRouter");

app.use(urlencoded({ extended: true }));
app.use(uploade.any());

app.use("/api/v1/category/:id/findsubcat", findSubCat);
app.use("/api/v1/category", categoryRoute);

app.use("/api/v1/subcategory", subCategoryRoute);

app.use("/api/v1/brand", brandRoute);

app.use("/api/v1/product", productRoute);

app.use("/api/v1/auth", authRoute);

app.use("/api/v1/tables", tableRoute);

app.use("/api/v1/orders", orderRoute);

app.all("*", (req, res, next) => {
  next(new ApiError(`con't found this url : ${req.originalUrl}`, 400));
});

app.use(gError);

const server = app.listen(3000, () => console.log("port 3000"));

process.on("unhandledRejection", (err) => {
  console.log(`err---------->${err}`);
  server.close(() => {
    console.log("close server...");
    process.exit(1);
  });
});
