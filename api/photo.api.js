const { up } = require('../common/upimage');
const { getphoto, addPhoto } = require('../service/photo.service');

const express = require('express');
const router = express.Router();

router.post("/addphoto", up(), addPhoto);
router.get("/getphoto", getphoto);

module.exports = router;
