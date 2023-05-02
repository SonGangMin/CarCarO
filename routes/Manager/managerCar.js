const express = require('express');
const router = express.Router();
const {isManager} = require('../../middlewares/');
const {
    renderCar,
    renderDetail,
    addRecommend
} = require('../../controllers/manager/managerCar');

// 차량관리 페이지
router.get('/', isManager, renderCar);
// 차량상세 페이지
router.get('/detail/:carNum', isManager, renderDetail);
// 추천차량등록
router.post('/recommend/:carNum', isManager, addRecommend);

module.exports = router;