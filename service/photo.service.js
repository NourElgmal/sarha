const { photomodule } = require("../modules/photo.module");
module.exports.addphoto=async(req,res)=>{
    const {title,path}=req.body
    await photomodule.insertMany({title,path})
    res.json({'msg':'add photo secc'});
}
module.exports.getphoto=async(req,res)=>{
    let ph=photomodule.find({});
    res.json({"msg":ph});
}
