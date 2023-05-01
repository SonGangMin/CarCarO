const express = require('express');
const router = express.Router();
const {isManager} = require('../../middlewares/');
const {
    renderCar,
} = require('../../controllers/manager/managerCar');

// 회원관리 페이지
router.get('/', isManager, renderCar);

module.exports = router;