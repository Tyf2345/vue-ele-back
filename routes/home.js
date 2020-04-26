const express = require("express");

const router = express.Router();

const indexCtx = require("../controller/home");

router.get("/home/cardList", indexCtx.cardList);

module.exports = router;
