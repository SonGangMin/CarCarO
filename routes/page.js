const express = require("express");
const { isLoggedIn, isNotLoggedIn } = require("../middlewares");
const { renderJoin, renderMain, renderLogin } = require("../controllers/page");

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = req.user;
  // res.locals.foloowerCount = 0;
  // res.locals.followingCount = 0;
  // res.locals.followingIdList = [];
  next();
});

// router.get(isLoggedIn, renderProfile);
router.get("/join", isNotLoggedIn, renderJoin);
router.get("/login", isNotLoggedIn, renderLogin);

// router.get('/join', renderJoin);
router.get("/", renderMain);

module.exports = router;
