const { HttpError } = require("../middleware/errorHandler");
const db = require("../models");

const list = async () => {
  const rentals = await db.rental.findAll();
  return rentals;
};

const get = async (id) => {
  const rental = await db.rental.findByPk(id);
  if (!rental) throw new HttpError("Resource not found.", 404);
  return rental;
};

const create = async (body) => {
  try {
    return await db.sequelize.transaction(async (t) => {
      const rental = await db.rental.create(body, { transaction: t });
      await (await rental.getMovie()).decrement("numberInStock", { transaction: t });
    });
  } catch (error) {
    throw error;
  }
};

const returnRental = async (id) => {
  const rental = await db.rental.findByPk(id);
  if (!rental) throw new HttpError("Resource not found.", 404);
  try {
    return await db.sequelize.transaction(async (t) => {
      await rental.update({ dateReturned: new Date() }, { transaction: t });
      await (await rental.getMovie()).increment("numberInStock", { transaction: t });
      return rental;
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  list,
  get,
  create,
  returnRental,
};
