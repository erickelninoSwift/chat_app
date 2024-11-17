const handlePageTitle = (pagetitle) => {
  return async (request, response, next) => {
    response.locals.html = true;
    response.locals.title = `${pagetitle} - ${process.env.PAGE_TITLE}`;
    next();
  };
};

module.exports = { handlePageTitle };
