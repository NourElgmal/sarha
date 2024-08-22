const mongoose=require('mongoose');
const connct=()=>{
    mongoose.connect('mongodb://localhost:27017/saraha').then(()=>{console.log("tmama connct")});
}
module.exports=connct;
///mongodb+srv://nouralgmal:0553722492@cluster0.uho3gyu.mongodb.net/saraha/