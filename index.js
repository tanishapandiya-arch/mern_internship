require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

connectDB();

app.get("/", (req, res) => {
  res.send("Backend running successfully with MongoDB!");
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Server is running"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});