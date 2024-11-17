const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const { router: LoginRouter } = require("./router/loginRouter");
const { router: inboxRouter } = require("./router/inboxRoute");
const { router: userRouter } = require("./router/userRouter");
const { notFoundHandler, errorhandler } = require("./middlewares/common/error");

dotenv.config();

const app = express();

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

app.use(LoginRouter);
app.use(userRouter);
app.use(inboxRouter);
// =======

// Error Handling

// 404 not found
app.use(notFoundHandler);
// ==========

// Common error handler

app.use(errorhandler);
// =========

const handleMongoDBConnection = async () => {
  mongoose.connect(`${process.env.MONGO_CONNECTION_STRING}`).then(() => {
    console.log("connected to mongodb");
  });
};

app.listen(process.env.PORT, () => {
  handleMongoDBConnection();
  return console.log(`Server is running on port : ${process.env.PORT}`);
});
