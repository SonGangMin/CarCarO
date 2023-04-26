const express = require("express");
const router = express.Router();
const { renderManager } = require("../../controllers/manager/managerboard");

router.get("/", renderManager);

module.exports = router;
