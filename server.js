require("dotenv").config();
const express = require("express");
const errormiddleware = require("./middlewares/error-middleware");
const app = express();

app.use(errormiddleware);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log("run port", port));
