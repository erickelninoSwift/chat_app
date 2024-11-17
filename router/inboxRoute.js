const express = require("express");
const { handleInboxController } = require("../controller/inboxController");
const { handlePageTitle } = require("../middlewares/common/pageTitle");
const router = express.Router();

router.get("/inbox", handlePageTitle("Inbox"), handleInboxController);

module.exports = {
  router,
};
