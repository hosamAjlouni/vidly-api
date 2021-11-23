const services = require("../services/rentals");

const list = async (req, res) => {
  const rentals = await services.list();
  res.status(200).send(rentals);
};

const get = async (req, res) => {
  const rental = await services.get(req.params.id);
  res.status(200).send(rental);
};

const create = async (req, res) => {
  const rental = await services.create(req.body);
  res.status(201).send(rental);
};

const returnRental = async (req, res) => {
  const rental = await services.returnRental(req.params.id);
  res.status(200).send(rental);
};

module.exports = {
  list,
  get,
  returnRental,
  create,
};
