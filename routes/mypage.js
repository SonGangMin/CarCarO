const express = require("express");

const mypageController = require("../controllers/mypage");
const { isLoggedIn, isMyId } = require("../middlewares");

const router = express.Router();

router.get("/", isLoggedIn, mypageController.renderMypage);
// 회원 정보 수정 페이지 렌더링
router.get("/edit/:id", isLoggedIn, mypageController.renderEditPage);
// 회원 정보 수정 처리
router.post("/edit", isLoggedIn, mypageController.updateUserInfo);
// 회원 정보 수정 페이지 라우터
router.get("/modify", isLoggedIn, mypageController.modifyPage);

router.get("/myinquiry/:user_id", isLoggedIn, mypageController.renderInquiry);

// 비밀번호 확인
router.get("/password/:id", isLoggedIn, mypageController.showPasswordPage);
router.post("/edit/:id", isLoggedIn, mypageController.checkPasswordPage);

module.exports = router;
