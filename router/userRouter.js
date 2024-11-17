const express = require("express");
const { handleUsersController } = require("../controller/userController");
const router = express.Router();

router.get("/users", handleUsersController);

module.exports = {
  router,
};
