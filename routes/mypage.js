const express = require('express');

const mypageController = require('../controllers/mypage');
const {isLoggedIn,isMyId} = require("../middlewares");
const { getRounds } = require('bcrypt');

const router = express.Router();

router.get("/", isLoggedIn,mypageController.renderMypage);
// 회원 정보 수정 페이지 렌더링
router.get('/edit/:id', isMyId, mypageController.renderEditPage);
// 회원 정보 수정 처리
router.post('/edit/', mypageController.updateUserInfo);
// 회원 정보 수정 페이지 라우터
router.get('/modify', mypageController.modifyPage);


// 마이페이지 들어가기 전 비밀번호 확인 페이지
router.get('/password/:id', isLoggedIn, mypageController.showPasswordPage);
router.post('/edit/:id', isLoggedIn, mypageController.checkPasswordPage);

// 회원정보수정 페이지 실시간 비밀번호 체크
router.get('/modify', isLoggedIn, mypageController.getModify);
router.post('checkPassword', isLoggedIn, mypageController.checkPassword);
router.post('edit', isLoggedIn, mypageController.postModify);
router.get('/mypage/edit', function(req, res) {
    res.send('edit page');
  });
module.exports = router;