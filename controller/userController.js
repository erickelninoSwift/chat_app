const handleUsersController = async (request, response, next) => {
  response.render("users");
  next();
};

module.exports = {
  handleUsersController,
};
