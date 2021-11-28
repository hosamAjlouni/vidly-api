const { HttpError } = require("../middleware/errorHandler");
const db = require("../models");

const create = async (req, res, next) => {
  const errors = [];

  const isMovieAvailable = !!(await db.movie.findByPk(req.body.movieId)).numberInStock;
  if (!isMovieAvailable)
    errors.push({ param: "movieId", msg: "movie is out of stock." });

  if (!!errors.length) throw new HttpError(errors, 400);
  next();
};

const returnRental = async (req, res, next) => {
  const rental = await db.rental.findByPk(req.params.id);
  if (!rental) throw new HttpError("Resource not found.", 400);

  const errors = [];

  const isReturned = !!rental.dateReturned;
  if (isReturned) throw new HttpError("Rental has already been returned", 400);

  if (!!errors.length) throw new HttpError(errors, 400);
  next();
};

const remove = async (req, res, next) => {
  next();
};

module.exports = {
  create,
  returnRental,
  remove,
};
