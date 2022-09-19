const asyncHandler = require("express-async-handler");

const ApiError = require("../shared/apiError");

exports.createOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const createItem = await Model.create(req.body);

    res.status(201).json({ status: 1, data: createItem });
  });

exports.getAll = (Model) =>
  asyncHandler(async (req, res) => {
    const allData = await Model.find();

    res.status(200).json({ data: allData });
  });

exports.deleteOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const deleteItem = await Model.findOneAndDelete({ _id: req.params.id });
    if (!deleteItem) {
      next(new ApiError(`Sorry, this Id not found`, 404));
      return;
    }

    res.status(204).json({ data: deleteItem });
  });

exports.updateOne = (Model) =>
  asyncHandler(async (req, res, next) => {
    const updateItem = await Model.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updateItem) {
      next(new ApiError(`Sorry, this Id not found`, 404));
      return;
    }
    res.status(200).json({ status: 1, data: updateItem });
  });

exports.findOne = (Model) =>
asyncHandler(async (req, res, next) => {
    const findItem = await Model.findById(req.params.id);
    if (!findItem) {
      next(new ApiError(`Sorry, this Id not found`, 404));
      return;
    }

    res.status(200).json({ data: findItem });
  });
