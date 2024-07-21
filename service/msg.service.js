const modmsg = require("../modules/masg.module");

module.exports.addmsg=async (req,res)=>{
    const {msg,resiveid}=req.body;
    try{
    await modmsg.insertMany({msg,resiveid});
    res.json({"mas":"msg add"});
    }catch(e){
        res.json({"msg":e})
    }
}

module.exports.getallmsg=async (req,res)=>{
    try{
    let msg= await modmsg.find({resiveid:req.userid});
    res.json({"mas":msg});
    }catch(e){
        res.json({"msg":e}) 
    }
}
