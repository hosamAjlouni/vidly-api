const { checkSchema } = require("express-validator");
const throwValidationErrors = require("../middleware/throwValidationErrors");
const express = require("express");
const genreSchema = require("../schemas/genres");
const router = express.Router();
const validators = require("../formValidators/genres");
const controllers = require("../controllers/genres");

router.get("/", controllers.list);

router.get("/:id", controllers.get);

router.post(
  "/",
  checkSchema(genreSchema),
  throwValidationErrors,
  validators.create,
  controllers.create
);

router.put(
  "/:id",
  checkSchema(genreSchema),
  throwValidationErrors,
  validators.update,
  controllers.update
);

router.delete("/:id", validators.remove, controllers.remove);

module.exports = router;
