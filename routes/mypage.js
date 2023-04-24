const express = require('express');
const { renderMypage } = require('../controllers/page');

const router = express.Router();

router.get('/', renderMypage);

router.get('/router', renderMypage);

module.exports = router;