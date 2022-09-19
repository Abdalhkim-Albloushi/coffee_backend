const TableModel = require('../model/table_model');

const sharFunctions = require('./shareFunction');

exports.allTable = sharFunctions.getAll(TableModel);

exports.createTable = sharFunctions.createOne(TableModel);
