require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const studentRoutes = require("./routes/student.routes");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/students", studentRoutes);

module.exports = app;