require("express-async-errors");
const cors = require('cors')
const express = require("express");
const { errorHandler } = require("./middleware/errorHandler");
const helmet = require("helmet");
const morgan = require("morgan");
const api = require("./routes/api");

const app = express();
const port = process.env.PORT || 8000;

if (app.get("env") === "development") {
  app.use(morgan("dev"));
  console.log("Using morgan request logger...");
}

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api", api);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
