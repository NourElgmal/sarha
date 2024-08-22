const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  path: String,
  title: String
});
photoSchema.post('init',function(doc){
  doc.path="https://localhost3000/"+doc.path;
})
const Photo = mongoose.model('Photo', photoSchema);
module.exports.photomodule = Photo;
