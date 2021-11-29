const services = require("../services/users");

const signup = async (req, res) => {
  const { user, token } = await services.signup(req.body);
  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send(user);
};

const login = async (req, res) => {
  const { user, token } = await services.login(req.body);
  res.send(token);
  // res.header("x-auth-token", token).send(user);
};

const profile = async (req, res) => {
  res.send()
};

module.exports = {
  signup,
  login,
  profile,
};
