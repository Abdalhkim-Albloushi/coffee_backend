const express = require("express");

const route = express.Router();

const { allTable, createTable } = require("../controller/table_controller");

const { createtableVali } = require("../validator/tableValition");

route.route("/").get(allTable).post(createtableVali, createTable);

module.exports = route;
