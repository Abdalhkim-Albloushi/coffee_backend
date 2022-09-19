const OrderModel = require("../model/order_model");

const sharFunctions = require("./shareFunction");

exports.getOrder = sharFunctions.getAll(OrderModel);

exports.createOrder = sharFunctions.createOne(OrderModel);

exports.findOrder = sharFunctions.findOne(OrderModel);

exports.updateOrder = sharFunctions.updateOne(OrderModel);

exports.deleteOrder = sharFunctions.deleteOne(OrderModel);
