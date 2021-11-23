const { checkSchema } = require("express-validator");
const throwValidationErrors = require("../middleware/throwValidationErrors");
const express = require("express");
const customerSchema = require("../schemas/customers");
const router = express.Router();
const validators = require("../formValidators/customers");
const controllers = require("../controllers/customers");

router.get("", controllers.list);

router.get("/:id", controllers.get);

router.post(
  "/",
  checkSchema(customerSchema),
  throwValidationErrors,
  validators.create,
  controllers.create
);

router.put(
  "/:id",
  checkSchema(customerSchema),
  throwValidationErrors,
  validators.update,
  controllers.update
);

router.delete("/:id", validators.remove, controllers.remove);

module.exports = router;
