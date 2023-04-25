const express = require("express");
const router = express.Router();
const { renderManagerFaq, updateManagerFaq, renderUpdate, deleteManagerFaq } = require("../../controllers/manager/managerfaq");

router.get("/", renderManagerFaq);
router.get("/:number", renderUpdate);
router.post("/:number", updateManagerFaq);
router.post("/:number", deleteManagerFaq);

module.exports = router;
