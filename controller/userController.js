const handleUsersController = async (request, response, next) => {
  response.render("users", {
    title: "Users - Chat Application",
  });
  next();
};

module.exports = {
  handleUsersController,
};
