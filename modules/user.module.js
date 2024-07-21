const mongoose=require('mongoose');
const sch=mongoose.Schema({
name:String,
email:String,
pass:String,
age:Number,
emailconf:{
    type:Boolean,
    default:false
}

});
const mod=mongoose.model("user",sch);
module.exports=mod;