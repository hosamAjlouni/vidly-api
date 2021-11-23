const { HttpError } = require("../middleware/errorHandler");
const db = require("../models");

const signup = async (req, res, next) => {
  const errors = [];

  const isEMailUnique = await db.user.isUniqueSet({ email: req.body.email });
  if (!isEMailUnique)
    errors.push({ param: "email", msg: "Email already taken" });

  if (!!errors.length) throw new HttpError(errors, 400);
  next();
};

const login = async (req, res, next) => {
  const user = await db.user.findOne({
    where: { email: req.body.email },
  });
  if (!user) throw new HttpError("Invalid Credentials", 400);

  const errors = [];
  if (!!errors.length) throw new HttpError(errors, 400);
  next();
};

module.exports = {
  signup,
  login,
};
