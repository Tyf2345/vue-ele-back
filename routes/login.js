const express = require("express");

const router = express.Router();

const indexCtx = require("../controller/login");

router.get("/login/captcha", indexCtx.captcha);
router.get("/login/index", indexCtx.index);
router.get("/login/loginOut", indexCtx.loginOut);

module.exports = router;
