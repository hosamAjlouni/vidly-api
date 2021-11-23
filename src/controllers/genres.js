const services = require("../services/genres");

const list = async (req, res) => {
  const genres = await services.list();
  res.status(200).send(genres);
};

const get = async (req, res) => {
  const genre = await services.get(req.params.id);
  res.status(200).send(genre);
};

const create = async (req, res) => {
  const genre = await services.create(req.body);
  res.status(201).send(genre);
};

const update = async (req, res) => {
  const genre = await services.update(req.params.id, req.body);
  res.status(200).send(genre);
};

const remove = async (req, res) => {
  const genre = await services.remove(req.params.id);
  res.send(genre);
};

module.exports = {
  list,
  get,
  update,
  create,
  remove,
};
