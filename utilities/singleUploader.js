const multer = require("multer");
const path = require("path");
const createError = require("http-errors");

const uploader = (sub_folder, allowed_types, max_file_size, error_message) => {
  //Upload folder
  const UPLOAD_FOLDER = `${__dirname}/../public/uploads/${sub_folder}/`;

  // define storage

  const storage = multer.diskStorage({
    destination: (request, file, cb) => {
      cb(null, UPLOAD_FOLDER);
    },
    filename: (request, file, cb) => {
      const fileExt = path.extname(file.originalname);
      cb(null, fileExt);
    },
  });

  const upload = "";
  return upload;
};

module.exports = uploader;
