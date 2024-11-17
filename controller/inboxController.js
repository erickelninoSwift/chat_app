const handleInboxController = async (request, response, next) => {
  response.render("inbox");
  next();
};

module.exports = {
  handleInboxController,
};
