const router = require("express").Router();
const test = require("./test");
const users = require("./users");
const movies = require("./movies");
const genres = require("./genres");
const customers = require("./customers");
const rentals = require("./rentals");

const authenticationRequired = require("../middleware/authenticationRequired");

router.use("/users", users);
router.use("/test",authenticationRequired , test);
router.use("/movies", movies);
router.use("/genres", genres);
router.use("/customers",authenticationRequired , customers);
router.use("/rentals",authenticationRequired , rentals);

module.exports = router;
