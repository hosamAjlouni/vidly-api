const services = require("../services/movies");

const list = async (req, res) => {
  const movies = await services.list();
  res.status(200).send(movies);
};

const get = async (req, res) => {
  const movie = await services.get(req.params.id);
  res.status(200).send(movie);
};

const create = async (req, res) => {
  const movie = await services.create(req.body);
  res.status(201).send(movie);
};

const update = async (req, res) => {
  const movie = await services.update(req.params.id, req.body);
  res.status(200).send(movie);
};

const remove = async (req, res) => {
  const movie = await services.remove(req.params.id);
  res.send(movie);
};

module.exports = {
  list,
  get,
  update,
  create,
  remove,
};
