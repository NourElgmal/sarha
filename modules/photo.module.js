const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  path: String,
  title: String
});

const Photo = mongoose.model('Photo', photoSchema);
module.exports.photomodule = Photo;
