const { HttpError } = require("../middleware/errorHandler");
const db = require("../models");

const list = async () => {
  const customers = await db.customer.findAll();
  return customers;
};

const get = async (id) => {
  const customer = await db.customer.findByPk(id);
  if (!customer) throw new HttpError("Resource not found.", 404);
  return customer;
};

const create = async (body) => {
  const customer = await db.customer.create(body);
  return customer;
};

const update = async (id, body) => {
  const customer = await db.customer.findByPk(id);
  if (!customer) throw new HttpError("Resource not found.", 404);
  await customer.update(body);
  return customer;
};

const remove = async (id) => {
  const customer = await db.customer.findByPk(id);
  if (!customer) throw new HttpError("Resource not found.", 404);
  await customer.destroy();
  return customer;
};

module.exports = {
  list,
  get,
  create,
  update,
  remove,
};
