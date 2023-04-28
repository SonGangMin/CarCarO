const express = require("express");
const router = express.Router();
const {
  renderManagerBoard,
  renderManagerBoardContent,
  renderManagerBoardSearch,
  renderManagerBoardEdit,
  editManagerBoard,
  deleteManagerPost,
  editManagerGradedown,
  editManagerGradeup,
} = require("../../controllers/manager/managerboard");
const { isManager } = require("../../middlewares/index");

router.get("/", isManager, renderManagerBoard);
router.get("/:postId", isManager, renderManagerBoardContent);
router.get("/search/:result", isManager, renderManagerBoardSearch);
router.get("/edit/:postId", isManager, renderManagerBoardEdit);
router.post("/edit/:postId", isManager, editManagerBoard);
router.post("/delete/:postId", isManager, deleteManagerPost);

router.post("/editgradeup/:postId", isManager, editManagerGradeup);
router.post("/editgradedown/:postId", isManager, editManagerGradedown);

module.exports = router;
