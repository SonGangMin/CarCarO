const express = require('express');
const passport = require('passport');
const authController = require('../controllers/auth');

const {isLoggedIn, isNotLoggedIn} = require('../middlewares');
const {join, login, logout, checkid, renderfindid, renderfindpw } = require('../controllers/auth');

const router = express.Router();

router.post('/join', isNotLoggedIn, join);
router.get('/renderfindid', isNotLoggedIn, renderfindid);
router.get('/renderfindpw', isNotLoggedIn, renderfindpw);
router.post('/login', isNotLoggedIn, login);
router.get('/logout', isLoggedIn, logout);
router.get('/kakao', passport.authenticate('kakao'));
router.get('/kakao/callback', passport.authenticate('kakao', {
    failureRedirect: '/?loginError=카카오로그인 실패',
}), (req, res) => {
    res.redirect('/');
});

router.get('/check-id', authController.checkIdDuplicate);

module.exports = router;