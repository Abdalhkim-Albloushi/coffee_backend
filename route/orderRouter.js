const express = require("express");

const route = express.Router();

const { createOrderVali } = require("../validator/orderValidtion");

const {
  createOrder,
  getOrder,
  updateOrder,
  deleteOrder,
  findOrder,
} = require("../controller/orederController");

const { checkToken } = require("../shared/checkToken");

route.route("/").get(getOrder).post(createOrderVali, createOrder);

route
  .route("/:id")
  .get( findOrder)
  .patch(checkToken, updateOrder)
  .delete(checkToken, deleteOrder);

module.exports = route;
