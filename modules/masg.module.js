
const mongoose=require('mongoose');
const sch=mongoose.Schema({
resiveid:{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'user'
},
msg:String
});
const modmsg=mongoose.model("msg",sch);
module.exports=modmsg;