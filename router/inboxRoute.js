const express = require("express");
const { handleInboxController } = require("../controller/inboxController");
const router = express.Router();

router.get("/inbox", handleInboxController);

module.exports = {
  router,
};
