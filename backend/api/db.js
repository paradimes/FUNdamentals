require("dotenv").config();
const mongoose = require("mongoose");

const mongoConnString = process.env.MONGODB_CONNECTION;

mongoose.connect(mongoConnString);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Database connected successfully.");
});
