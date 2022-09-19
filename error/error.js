const globalError = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    status: err.sta,

    message: err.message,
    // stack: err.stack,
  });
};

module.exports = globalError;
