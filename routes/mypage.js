const express = require("express");
const mypageController = require("../controllers/mypage");
const { isLoggedIn, isMyId } = require("../middlewares");
const { getRounds } = require("bcrypt");
const users = require("../models/users");
const models = require('../models')

const router = express.Router();

router.get("/", isLoggedIn, mypageController.renderMypage);
// 회원 정보 수정 페이지 렌더링
router.get("/edit/:id", isLoggedIn, mypageController.renderEditPage);
// 회원 정보 수정 처리
router.post("/edit", isLoggedIn, mypageController.updateUserInfo);
// 회원 정보 수정 페이지 라우터
router.get("/modify", isLoggedIn, mypageController.modifyPage);

router.get("/myinquiry/:user_id", isLoggedIn, mypageController.renderInquiry);

// 마이페이지 들어가기 전 비밀번호 확인 페이지
router.get("/password/:id", isLoggedIn, mypageController.showPasswordPage);
router.post("/edit/:id", isLoggedIn, mypageController.checkPasswordPage);

// 회원정보수정 페이지 실시간 비밀번호 체크
router.get("/modify", isLoggedIn, mypageController.getModify);
router.post("checkPassword", isLoggedIn, mypageController.checkPassword);
router.post("edit", isLoggedIn, mypageController.postModify);
router.get("/mypage/edit", function (req, res) {
  res.send("edit page");
});

// 회원 탈퇴
// router.get("/withdraw", isLoggedIn, mypageController.renderWithdrawPage);
router.post("/withdraw", async(req, res, next) => {
  // console.log(req.body);
  // users.findOneAndDelete({ where: req.user.id })
  // .then(() => {
  //   res.redirect('/'); // 탈퇴 성공 시 메인 페이지로 리다이렉트
  // })
  // .catch(err => next (err));
  const myId = req.user.id;
  console.log('ddddddddddddddddddddddd',myId)
  try{
    const withdraw = await models.users.findOne({where:{id:myId}});
    if(!withdraw){
      throw new Error('오류입니다.')
    }
    await models.users.destroy({where:{id:myId}});
    res.redirect('/')
  } catch(err){
    console.error(err);
    next(err);
  }
});

module.exports = router;
