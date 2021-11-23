const { HttpError } = require("../middleware/errorHandler");
const db = require("../models");

const create = async (req, res, next) => {
  const errors = [];

  const isNameUnique = await db.genre.isUniqueSet({ name: req.body.name });
  if (!isNameUnique)
    errors.push({ param: "name", msg: "Genre name should be unique" });

  if (!!errors.length) throw new HttpError(errors, 400);
  next();
};

const update = async (req, res, next) => {
  const genre = await db.genre.findByPk(req.params.id);
  if (!genre) throw new HttpError("Resource not found.", 400);

  const errors = [];

  const isNameUnique = await db.genre.isUniqueSet({ name: req.body.name }, genre.id);
  if (!isNameUnique)
    errors.push({ param: "name", msg: "Genre name should be unique" });

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
