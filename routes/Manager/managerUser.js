const express = require("express");
const router = express.Router();
const { isManager } = require("../../middlewares/");
const {
  renderUser,
  gradeEdit,
  deleteEdit,
  renderUserCarsale,
} = require("../../controllers/manager/managerUser");

// 회원관리 페이지
router.get("/", isManager, renderUser);
// 회원 권한 수정
router.post("/edit/:id", isManager, gradeEdit);
// 회원 탈퇴시키기
router.post("/delete/:id", isManager, deleteEdit);
// 각 회원의 판매차량페이지
router.get("/:id", isManager, renderUserCarsale);

module.exports = router;
