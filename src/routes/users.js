const { checkSchema } = require("express-validator");
const throwValidationErrors = require("../middleware/throwValidationErrors");
const express = require("express");
const { userLoginSchema, userSignupSchema } = require("../schemas/users");
const router = express.Router();
const validators = require("../formValidators/users");
const controllers = require("../controllers/users");

const authenticationRequired = require("../middleware/authenticationRequired");

router.get("/profile", authenticationRequired, controllers.profile);

router.post(
  "/signup",
  checkSchema(userSignupSchema),
  throwValidationErrors,
  validators.signup,
  controllers.signup
);

router.post(
  "/login",
  checkSchema(userLoginSchema),
  throwValidationErrors,
  validators.login,
  controllers.login
);

module.exports = router;
