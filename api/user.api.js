const { verfay } = require('../email/user.email');
const { validate } = require('../malware/validation/user.validation');
const {  sinup, sinin } = require('../service/user.service');
const express=require('express').Router();
express.post("/sinup/:id",validate,sinup);
express.post("/sinin",sinin);
express.get("/verfay/:t",verfay)
module.exports=express;
