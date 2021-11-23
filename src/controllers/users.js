const services = require("../services/users");

const signup = async (req, res) => {
  const user = await services.signup(req.body);
  res.status(201).send(user);
};

const login = async (req, res) => {
  const { token, user } = await services.login(req.body);
  res.header("x-auth-token", token).send(user);
};

const profile = async (req, res) => {
  res.send()
};

module.exports = {
  signup,
  login,
  profile,
};
