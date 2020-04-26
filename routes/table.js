const express = require("express");
const router = express.Router();
const indexCtx = require("../controller/table");
router.get("/table/query", indexCtx.query);

module.exports = router;
