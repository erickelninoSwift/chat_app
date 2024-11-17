// Error 404 not found
const createError = require("http-errors");

const notFoundHandler = (request, response, next) => {
  const error = new Error(createError(404, "Page was not found"));
  next(error);
};

const errorhandler = (error, request, response, next) => {
  response.locals.error =
    process.env.NODE_ENV === "DEV" ? error : { message: error.message };

  response.status(error.status || 500);
  if (response.locals.html) {
    // render html repsonse
    response.render("error", {
      title: "This is html error page",
      content: `${error.message}`,
    });
  } else {
    // JSON response

    response.json({
      title: "Error Found",
      error: response.locals.error,
    });
  }
  next();
};

module.exports = {
  notFoundHandler,
  errorhandler,
};
