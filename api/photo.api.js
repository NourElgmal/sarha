const { addphoto, getphoto } = require('../service/photo.service');

const express=require('express').Router();
express.post("/addphoto",addphoto);
express.get("/getphoto",getphoto);
module.exports=express;
