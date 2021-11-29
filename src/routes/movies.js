const { checkSchema } = require("express-validator");
const throwValidationErrors = require("../middleware/throwValidationErrors");
const express = require("express");
const movieSchema = require("../schemas/movies");
const router = express.Router();
const validators = require("../formValidators/movies");
const controllers = require("../controllers/movies");
const authenticationRequired = require("../middleware/authenticationRequired");
const onlyAdmin = require("../middleware/onlyAdmin");


router.get("", controllers.list);

router.get("/:id", controllers.get);

router.post(
  "/",
  authenticationRequired,
  checkSchema(movieSchema),
  throwValidationErrors,
  validators.create,
  controllers.create
);

router.put(
  "/:id",
  authenticationRequired,
  checkSchema(movieSchema),
  throwValidationErrors,
  validators.update,
  controllers.update
);

router.delete("/:id", [authenticationRequired, onlyAdmin], validators.remove, controllers.remove);

module.exports = router;
