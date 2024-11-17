// Error 404 not found
const createError = require("http-errors");

const notFoundHandler = (request, response, next) => {
  next(createError(404, "your requested content was not found"));
};

const errorhandler = (error, request, response, next) => {
  response.render("error", {
    title: "Error page",
    content: `${error.message}`,
  });
  next();
};

module.exports = {
  notFoundHandler,
  errorhandler,
};
