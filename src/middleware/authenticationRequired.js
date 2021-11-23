const db = require("../models");
const jwt = require("jsonwebtoken");
const config = require("config");
const { HttpError } = require("./errorHandler");

const authenticationRequired = async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) throw new HttpError("Authentication required", 400);

  const decoded = jwt.verify(token, config.get("jwtPrivateKey"));

  const user = await db.user.findByPk(decoded.id);
  if (!user) throw new HttpError("Sorry, user not found.");

  req.user = user;
  next();
};

module.exports = authenticationRequired;
