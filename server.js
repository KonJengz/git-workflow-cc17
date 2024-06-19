require("dotenv").config();
const express = require("express");
const notFound = require("./middlewares/not-found");
const app = express();

app.use(notFound);
app.use(errormiddleware);

app.use("/login", (req, res) => {
  res.json({ mes: "login..." });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("run port", port));
