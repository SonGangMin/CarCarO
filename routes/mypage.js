const express = require("express");
const { renderMypage } = require("../controllers/page");

const router = express.Router();

router.get("/", renderMypage);

module.exports = router;
