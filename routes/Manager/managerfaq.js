const express = require("express");
const router = express.Router();
const { renderManagerFaq, registerManagerFaq, downManagerFaq, 
    updateManagerFaq, deleteManagerFaq,
    renderUpdate, update } = require("../../controllers/manager/managerfaq");

router.get("/", renderManagerFaq);
// router.get("/", registerManagerFaq);
// router.get("/", downManagerFaq);
router.get("/:title", renderUpdate);
router.post("/:title", updateManagerFaq);
// router.get("/", deleteManagerFaq);
// router.get("/", update);

module.exports = router;
