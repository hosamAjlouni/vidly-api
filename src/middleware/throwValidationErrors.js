const _ = require("lodash");
const { validationResult } = require("express-validator");
const { HttpError } = require("./errorHandler");

const throwValidationErrors = (req, res, next) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) throw new HttpError(errors.array(), 400);
  next();
};

module.exports = throwValidationErrors;

