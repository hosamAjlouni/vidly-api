class HttpError {
  constructor(errors, statusCode) {
    this.statusCode = statusCode;
    if (typeof errors === "object" && errors.length) {
      this.errors = {};
      errors.forEach((error) => {
        error.param in this.errors
          ? this.errors[error.param].push(error.msg)
          : (this.errors[error.param] = [error.msg]);
      });
    } else {
      this.msg = errors;
    }
  }
}

const errorHandler = (error, req, res, next) => {
  if (error instanceof HttpError)
    return res.status(error.statusCode).send(error);
  return res.status(500).send(error);
};

module.exports = {
  HttpError,
  errorHandler,
};
