const { HttpError } = require("../middleware/errorHandler");
const db = require("../models");

const list = async () => {
  const movies = await db.movie.findAll();
  return movies;
};

const get = async (id) => {
  const movie = await db.movie.findByPk(id);
  if (!movie) throw new HttpError("Resource not found.", 404);
  return movie;
};

const create = async (body) => {
  const movie = await db.movie.create(body);
  return movie;
};

const update = async (id, body) => {
  const movie = await db.movie.findByPk(id);
  if (!movie) throw new HttpError("Resource not found.", 404);
  await movie.update(body);
  return movie;
};

const remove = async (id) => {
  const movie = await db.movie.findByPk(id);
  if (!movie) throw new HttpError("Resource not found.", 404);
  await movie.destroy();
  return movie;
};

module.exports = {
  list,
  get,
  create,
  update,
  remove,
};
