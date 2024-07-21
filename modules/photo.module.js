const mongoose= require("mongoose");

const sch=mongoose.Schema({
    title:String,
    path:String
});
module.exports.photomodule=mongoose.model("photomodule",sch)
