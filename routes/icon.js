const express = require("express");

const router = express.Router();

const indexCtx = require("../controller/icon");

router.get("/icon/index", indexCtx.iconList);

module.exports = router;
