const mongoose = require("mongoose");

const TableModelSchema = new mongoose.Schema({
  tables: {
    type: String,
    require: [true, "tables must be required"],
  },
});

const tableModel = mongoose.model("table", TableModelSchema);

module.exports = tableModel;
