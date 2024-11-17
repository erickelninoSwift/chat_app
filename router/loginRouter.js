const express = require("express");
const { handleLoginController } = require("../controller/loginController");
const { handlePageTitle } = require("../middlewares/common/pageTitle");
const router = express.Router();

router.get("/", handlePageTitle("Login"), handleLoginController);

module.exports = {
  router,
};
