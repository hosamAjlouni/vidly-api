const router = require("express").Router();
const models = require('../models')

router.get("/", async (req, res) => {
  res.send("Test route")
});

module.exports = router;
