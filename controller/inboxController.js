const handleInboxController = async (request, response, next) => {
  response.render("inbox", {
    title: "inbox - Chat Application",
  });
  next();
};

module.exports = {
  handleInboxController,
};
