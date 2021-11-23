const { HttpError } = require("../middleware/errorHandler");
const db = require("../models");

const create = async (req, res, next) => {
  const errors = [];

  const isTitleUnique = await db.movie.isUniqueSet({ title: req.body.title });
  if (!isTitleUnique)
    errors.push({ param: "title", msg: "Movie title should be unique" });

  if (!!errors.length) throw new HttpError(errors, 400);
  next();
};

const update = async (req, res, next) => {
  const movie = await db.movie.findByPk(req.params.id);
  if (!movie) throw new HttpError("Resource not found.", 400);

  const errors = [];

  const isTitleUnique = await db.movie.isUniqueSet(
    { title: req.body.title },
    movie.id
  );
  if (!isTitleUnique)
    errors.push({ param: "title", msg: "Movie title should be unique" });

  if (!!errors.length) throw new HttpError(errors, 400);
  next();
};

const remove = async (req, res, next) => {
  next();
};

module.exports = {
  create,
  update,
  remove,
};
