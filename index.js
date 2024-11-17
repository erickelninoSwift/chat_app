const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View Engine

app.set("view engine", "ejs");

// set Statict foldder

app.use(express.static(path.join(__dirname, "public")));

// ====

// parse cookies

app.use(cookieParser(process.env.COOKIE_SECRET));

// ======

// routes setup

app.get("/", (request, response) => {
  return response.send("hello world");
});
// =======

// Error Handling

// =========

const handleMongoDBConnection = async () => {
  mongoose.connect(`${process.env.MONGO_CONNECTION_STRING}`).then(() => {
    console.log("connected to mongodb");
  });
};

app.listen(PORT, () => {
  handleMongoDBConnection();
  return console.log(`Server is running on port : ${PORT}`);
});
