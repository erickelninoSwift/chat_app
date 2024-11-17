const handleLoginController = async (request, response, next) => {
  response.render("index");
  next();
};

module.exports = {
  handleLoginController,
};
