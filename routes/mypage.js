const express = require('express');
const { renderMypage } = require('../controllers/page');
const mypageController = require('../controllers/mypage');

const router = express.Router();

router.get('/', renderMypage);

// 회원 정보 수정 페이지 렌더링
router.get('/edit', mypageController.renderEditPage);

// 회원 정보 수정 처리
router.post('/edit', mypageController.updateUserInfo);

module.exports = router;