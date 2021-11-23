const { HttpError } = require("../middleware/errorHandler");
const db = require("../models");

const create = async (req, res, next) => {
  const errors = [];

  const isNameUnique = await db.customer.isUniqueSet({ name: req.body.name });
  if (!isNameUnique)
    errors.push({ param: "name", msg: "Customer name should be unique" });

  const isPhoneUnique = await db.customer.isUniqueSet({
    phone: req.body.phone,
  });
  if (!isPhoneUnique)
    errors.push({
      param: "phone",
      msg: "Customer phone number should be unique",
    });

  if (!!errors.length) throw new HttpError(errors, 400);
  next();
};

const update = async (req, res, next) => {
  const customer = await db.customer.findByPk(req.params.id);
  if (!customer) throw new HttpError("Resource not found.", 400);

  const errors = [];

  const isNameUnique = await db.customer.isUniqueSet(
    { name: req.body.name },
    customer.id
  );
  if (!isNameUnique)
    errors.push({ param: "name", msg: "Customer name should be unique" });

  const isPhoneUnique = await db.customer.isUniqueSet(
    { phone: req.body.phone },
    customer.id
  );
  if (!isPhoneUnique)
    errors.push({
      param: "phone",
      msg: "Customer phone number should be unique",
    });

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
