const { auth } = require('../malware/auth/auth');
const { addmsg,getallmsg } = require('../service/msg.service');

const express=require('express').Router();

express.post("/addmsg",addmsg)
express.post("/getmsg",auth,getallmsg)

module.exports=express;