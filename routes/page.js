const express = require('express');
const {isLoggedIn, isNotLoggedIn} = require('../middlewares');
const {
    renderMain, renderJoin, renderLogin, renderSalecar, renderFindcar
} = require('../controllers/page');

const router = express.Router();

router.use((req, res, next) => {
    res.locals.user = req.user;
    // res.locals.foloowerCount = 0;
    // res.locals.followingCount = 0;
    // res.locals.followingIdList = [];
    next();
});

// router.get('/join', renderJoin);
router.get('/join', isNotLoggedIn, renderJoin);

// router.get('/login', renderJoin);
router.get('/login', isNotLoggedIn, renderLogin);

router.get('/carsale', renderSalecar);
router.get('/findcar', renderFindcar);



router.get('/', renderMain);

module.exports = router;