const { checkSchema } = require("express-validator");
const throwValidationErrors = require("../middleware/throwValidationErrors");
const express = require("express");
const rentalSchema = require("../schemas/rentals");
const router = express.Router();
const validators = require("../formValidators/rentals");
const controllers = require("../controllers/rentals");

router.get("", controllers.list);

router.get("/:id", controllers.get);

router.post(
  "/",
  checkSchema(rentalSchema),
  throwValidationErrors,
  validators.create,
  controllers.create
);

router.put(
  "/:id/return",
  validators.returnRental,
  controllers.returnRental
);

module.exports = router;
