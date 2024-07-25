const multer = require('multer');

module.exports.up = () => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  function fileFilter(req, file, cb) {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Not a valid image file'), false);
    }
  }

  const upload = multer({ storage: storage, fileFilter: fileFilter });
  return upload.single('file');
}
