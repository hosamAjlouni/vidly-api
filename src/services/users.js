const { HttpError } = require("../middleware/errorHandler");
const _ = require("lodash");
const config = require("config");
const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signup = async (body) => {
  body.password = await bcrypt.hash(body.password, 10);
  const user = await db.user.create(body);
  await user.reload();
  return user;
};

const login = async (body) => {
  let user = await db.user.findOne({
    where: { email: body.email },
    attributes: { exclude: null },
  });
  if (!user) throw new HttpError("Invalid Credentials.", 404);
  
  const passIsCorrect = await bcrypt.compare(body.password, user.password);
  if (!passIsCorrect) throw new HttpError("Invalid Credentials.", 404);

  user = _.pick(user, ["id", "email"]);
  let token = jwt.sign(user, config.get("jwtPrivateKey"));
  return { user, token };
};

module.exports = {
  signup,
  login,
};
