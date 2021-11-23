const { checkSchema } = require("express-validator");
const throwValidationErrors = require("../middleware/throwValidationErrors");
const express = require("express");
const movieSchema = require("../schemas/movies");
const router = express.Router();
const validators = require("../formValidators/movies");
const controllers = require("../controllers/movies");

router.get("", controllers.list);

router.get("/:id", controllers.get);

router.post(
  "/",
  checkSchema(movieSchema),
  throwValidationErrors,
  validators.create,
  controllers.create
);

router.put(
  "/:id",
  checkSchema(movieSchema),
  throwValidationErrors,
  validators.update,
  controllers.update
);

router.delete("/:id", validators.remove, controllers.remove);

module.exports = router;
