const express = require('express');
const {renderFindcar, renderSalecar} = require('../controllers/page');

const router = express.Router();

router.get('/findcar', renderFindcar);
router.get('/carsale', renderSalecar);

module.exports = router;