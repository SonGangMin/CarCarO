const express = require('express');

const mypageController = require('../controllers/mypage');
const {isLoggedIn} = require("../middlewares");

const router = express.Router();

router.get("/", isLoggedIn,mypageController.renderMypage);
// 회원 정보 수정 페이지 렌더링
router.get('/edit/:id', mypageController.renderEditPage);
// 회원 정보 수정 처리
router.post('/edit', mypageController.updateUserInfo);
// 회원 정보 수정 페이지 라우터
router.get('/modify', mypageController.modifyPage);

module.exports = router;