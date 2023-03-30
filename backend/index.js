const express = require("express");
const { connect } = require("./db/config");
const { Router } = require("./Routes/routes");
require("dotenv").config();
const cors = require("cors");

const app = express();

connect();

app.use(cors());

app.use(express.json());

app.use("/", Router);

app.listen(process.env.PORT, () => {
  console.log("Connected at", process.env.PORT);
});
