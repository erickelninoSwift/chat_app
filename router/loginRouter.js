const express = require("express");
const { handleLoginController } = require("../controller/loginController");
const router = express.Router();

router.get("/", handleLoginController);

module.exports = {
  router,
};
