require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.log("MongoDB Connection Error:", err));

app.get("/", (req, res) => {
  res.send("Backend running successfully with MongoDB!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});