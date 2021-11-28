const _ = require("lodash");
const { validationResult } = require("express-validator");
const { HttpError } = require("./errorHandler");
const { isArray } = require("lodash");

const throwValidationErrors = (req, res, next) => {
  let errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    const errorsObj = {}
    errors.array().forEach(error => {
      isArray(errorsObj[error.param])
      ? errorsObj[error.param].push(error.msg)
      : errorsObj[error.param] = error.msg
    })
    console.log(errorsObj)
    throw new HttpError(errorsObj, 400);
  }
  next();
};

module.exports = throwValidationErrors;

