const { photomodule } = require("../modules/photo.module");
const { v4: uuidv4 } = require('uuid');

module.exports.addPhoto = async (req, res) => {
  try {
    const { title } = req.body;
    if (req.file) {
      const filePath = uuidv4() + req.file.originalname;
      await photomodule.insertMany({ path: filePath, title });
      res.json({ msg: "Photo added successfully", path: filePath });
    } else {
      res.status(400).json({ msg: "Only image files are allowed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
}

module.exports.getphoto = async (req, res) => {
  try {
    let photos = await photomodule.find({});
    res.json({ msg: photos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error", error: error.message });
  }
}
