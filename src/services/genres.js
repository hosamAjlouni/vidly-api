const { HttpError } = require("../middleware/errorHandler");
const db = require("../models");

const list = async () => {
  const genres = await db.genre.findAll();
  return genres;
};

const get = async (id) => {
  const genre = await db.genre.findByPk(id);
  if (!genre) throw new HttpError("Resource not found.", 404);
  return genre;
};

const create = async (body) => {
  const genre = await db.genre.create(body);
  return genre;
};

const update = async (id, body) => {
  const genre = await db.genre.findByPk(id);
  if (!genre) throw new HttpError("Resource not found.", 404);
  await genre.update(body);
  return genre;
};

const remove = async (id) => {
  const genre = await db.genre.findByPk(id);
  if (!genre) throw new HttpError("Resource not found.", 404);
  await genre.destroy();
  return genre;
};

module.exports = {
  list,
  get,
  create,
  update,
  remove,
};
