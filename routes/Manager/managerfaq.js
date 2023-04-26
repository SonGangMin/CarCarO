const express = require("express");
const router = express.Router();
const { renderManagerFaq, updateManagerFaq, renderUpdate, 
    deleteManagerFaq, registManagerFaq, downManagerFaq } = require("../../controllers/manager/managerfaq");

router.get("/", renderManagerFaq);
router.get("/:number", renderUpdate);
router.post("/:number", updateManagerFaq);
router.post("/delete/:number", deleteManagerFaq);
// router.post("/upgrade/:number", registManagerFaq);
// router.post("/downgrade/:number", downManagerFaq);

module.exports = router;
