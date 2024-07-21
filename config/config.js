const mongoose=require('mongoose');
const connct=()=>{
    mongoose.connect('mongodb+srv://nouralgmal:0553722492@cluster0.uho3gyu.mongodb.net/saraha').then(()=>{console.log("tmama connct")});
}
module.exports=connct;