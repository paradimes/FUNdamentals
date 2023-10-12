require("dotenv").config();
const mongoose = require("mongoose");

const mongoConnString = "...";

mongoose.connect(mongoConnString);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Database connected successfully.");
});
