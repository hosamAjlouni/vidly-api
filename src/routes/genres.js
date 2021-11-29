const { checkSchema } = require("express-validator");
const throwValidationErrors = require("../middleware/throwValidationErrors");
const express = require("express");
const genreSchema = require("../schemas/genres");
const router = express.Router();
const validators = require("../formValidators/genres");
const controllers = require("../controllers/genres");
const authenticationRequired = require("../middleware/authenticationRequired");

router.get("/", controllers.list);

router.get("/:id", controllers.get);

router.post(
  "/",
  authenticationRequired,
  checkSchema(genreSchema),
  throwValidationErrors,
  validators.create,
  controllers.create
);

router.put(
  "/:id",
  authenticationRequired,
  checkSchema(genreSchema),
  throwValidationErrors,
  validators.update,
  controllers.update
);

router.delete("/:id", authenticationRequired, validators.remove, controllers.remove);

module.exports = router;
