const express = require("express");
const router = express.Router();
const {
  renderManager,
  renderManagerBoard,
} = require("../../controllers/manager/manager");

router.get("/", renderManager);
router.get("/managerboard", renderManagerBoard);

module.exports = router;
