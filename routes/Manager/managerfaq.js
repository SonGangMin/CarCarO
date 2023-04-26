const express = require("express");
const router = express.Router();
const {
  renderManagerFaq,
  updateManagerFaq,
  renderUpdate,
  deleteManagerFaq,
  registManagerFaq,
  downManagerFaq,
} = require("../../controllers/manager/managerfaq");
const { isManager } = require("../../middlewares/index");

router.get("/", isManager, renderManagerFaq);
router.get("/:number", isManager, renderUpdate);
router.post("/:number", isManager, updateManagerFaq);
router.post("/delete/:number", isManager, deleteManagerFaq);
// router.post("/upgrade/:number", registManagerFaq);
// router.post("/downgrade/:number", downManagerFaq);

module.exports = router;
