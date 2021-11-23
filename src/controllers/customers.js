const services = require("../services/customers");

const list = async (req, res) => {
  const customers = await services.list();
  res.status(200).send(customers);
};

const get = async (req, res) => {
  const customer = await services.get(req.params.id);
  res.status(200).send(customer);
};

const create = async (req, res) => {
  const customer = await services.create(req.body);
  res.status(201).send(customer);
};

const update = async (req, res) => {
  const customer = await services.update(req.params.id, req.body);
  res.status(200).send(customer);
};

const remove = async (req, res) => {
  const customer = await services.remove(req.params.id);
  res.send(customer);
};

module.exports = {
  list,
  get,
  update,
  create,
  remove,
};
