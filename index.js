const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const app = express();
const PORT = 3000;

app.get("/", (request, response) => {
  return response.send("hello world");
});

const handleMongoDBConnection = async () => {
  mongoose.connect(`${process.env.MONGO_CONNECTION_STRING}`).then(() => {
    console.log("connected to mongodb");
  });
};

app.listen(PORT, () => {
  handleMongoDBConnection();
  return console.log(`Server is running on port : ${PORT}`);
});
