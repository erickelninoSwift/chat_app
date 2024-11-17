const handleLoginController = async (request, response, next) => {
  response.render("index", {
    title: "Login - Chat Application",
  });
  next();
};

module.exports = {
  handleLoginController,
};
