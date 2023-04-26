const express = require("express");
const router = express.Router();
const { renderManagerFaq, updateManagerFaq, renderUpdate, 
    deleteManagerFaq, upgradeManagerFaq, downgradeManagerFaq } = require("../../controllers/manager/managerfaq");

router.get("/", renderManagerFaq);
router.get("/:number", renderUpdate);
router.post("/:number", updateManagerFaq);
router.post("/delete/:number", deleteManagerFaq);
router.post("/upgrade/:number", upgradeManagerFaq);
router.post("/downgrade/:number", downgradeManagerFaq);

module.exports = router;
