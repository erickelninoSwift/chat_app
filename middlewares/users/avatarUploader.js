const avatarupload = (request, response, next) => {
  const upload = uploader(
    "avatars",
    ["image/jpeg", "image/jpg", "image/png"],
    1000000,
    "Only .jpg , jpeg, png format allowed"
  );
};

module.exports = {
  avatarupload,
};
