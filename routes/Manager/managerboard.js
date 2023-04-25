const express = require("express");
const router = express.Router();
const {
  renderManagerBoard,
} = require("../../controllers/manager/managerboard");

router.get("/", renderManagerBoard);

module.exports = router;
