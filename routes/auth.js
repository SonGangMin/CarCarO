const express = require('express');
const passport = require('passport');

const {isLoggedIn, isNotLoggedIn} = require('../middlewares');
const {join, login, logout, checkid } = require('../controllers/auth');

const router = express.Router();

router.post('/join', isNotLoggedIn, join);
router.post('/login', isNotLoggedIn, login);
router.get('/logout', isLoggedIn, logout);
// router.get('/join', isLoggedIn, checkid);

module.exports = router;