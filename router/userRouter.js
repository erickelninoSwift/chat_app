const express = require("express");
const { handleUsersController } = require("../controller/userController");
const { handlePageTitle } = require("../middlewares/common/pageTitle");
const router = express.Router();

router.get("/users", handlePageTitle("Users"), handleUsersController);

module.exports = {
  router,
};
