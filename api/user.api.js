const { verfay } = require("../email/user.email");
const { validate } = require("../malware/validation/user.validation");
const { sinup, sinin, getu } = require("../service/user.service");
const express = require("express").Router();
express.post("/sinup/:id", validate, sinup);
express.post("/sinin", sinin);
express.get("/verfay/:t", verfay);
express.get("/get", getu);
module.exports = express;
