const { HttpError } = require("./errorHandler");

const onlyAdmin = async (req, res, next) => {
  if (!req.user.isAdmin) throw new HttpError("Unauthorized", 403);
  next();
};

module.exports = onlyAdmin;
