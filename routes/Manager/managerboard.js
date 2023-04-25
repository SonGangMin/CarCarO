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

router.get("/", renderManagerBoard);
router.get("/:postId", renderManagerBoardContent);
router.get("/search/:result", renderManagerBoardSearch);
router.get("/edit/:postId", renderManagerBoardEdit);
router.post("/edit/:postId", editManagerBoard);
router.post("/delete/:postId", deleteManagerPost);

router.post("/editgradeup/:postId", editManagerGradeup);
router.post("/editgradedown/:postId", editManagerGradedown);

module.exports = router;
