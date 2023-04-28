// @ts-check

const models = require("../models");
const bcrypt = require("bcrypt");
const { hash } = require("bcrypt");
const axios = require("axios");

exports.renderMypage = (req, res) => {
  res.render("mypage", {
    title: "마이페이지",
  });
};

// 회원 정보 수정 페이지 렌더링 처리
exports.renderEditPage = async (req, res) => {
  try {
    const id = req.params.id; // 사용자 아이디
    console.log("ee=========ee", id);
    const user = await models.users.findOne({ where: { id: id } }); // 사용자 정보 조회
    // console.log(user[0]);
    res.render("modify", { title: "회원정보수정" }); // modify.ejs 뷰에 사용자 정보 전달

    console.log("ddd=========dd", id);
  } catch (err) {
    console.error(err);
    // res.status(500).send('서버 오류');
  }
};

// 회원 정보 수정 처리
exports.updateUserInfo = async (req, res) => {
  try {
    const Id = req.params.id;
    const { id, password, name, tel, email, birth } = req.body; // 폼 데이터 파싱
    const hash = await bcrypt.hash(password, 12);
    // 사용자 정보 수정
    await models.users.update(
      { password: hash, name, tel, email, birth },
      { where: { id } }
    );
    console.log("회원 정보가 수정되었습니다.");
    res.redirect(`/mypage`); // 수정된 회원 정보 페이지로 리다이렉트`
  } catch (err) {
    console.error(err);
    res.status(500).send("서버 오류");
  }
};

// 회원 정보 수정 페이지 렌더링
exports.modifyPage = (req, res) => {
  res.render("edit", { title: "회원 정보 수정" });
};

exports.renderInquiry = async (req, res, next) => {
  const myinquiry = req.params.user_id;
  console.log("1111111111111111 => ", myinquiry);
  try {
    const PAGE_SIZE = 15;
    const page = req.query.page ? parseInt(req.query.page, 10) : 1;
    const offset = (page - 1) * PAGE_SIZE;
    const total = await models.inquirys.count();
    const totalPages = Math.ceil(total / PAGE_SIZE);
    const twits = await models.inquirys.findAll({
      order: [["number", "DESC"]],
      offset,
      limit: PAGE_SIZE,
    });
    res.render("myinquiry", {
      twits,
      title: "내 문의",
      totalPages,
      currentPage: page,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// 마이페이지 들어가기 전 비밀번호 확인 페이지
exports.showPasswordPage = (req, res, next) => {
  const { id } = req.params;
  res.render("mypage_password", { id, title: "비밀번호확인" });
};

exports.checkPasswordPage = async (req, res) => {
  try {
    const { password } = req.body;
    const user = await models.users.findOne({ where: { id: req.user.id } });
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      res.redirect(`${req.user.id}`);
    } else {
      res.render("mypage_password", {
        message: "비밀번호가 일치하지 않습니다.",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("서버 오류");
  }
};

// 회원정보수정 페이지 실시간 비밀번호 체크
exports.getModify = async (req, res, next) => {
  try {
    const user = req.session.user;
    res.render("modify", { user });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.checkPassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    const user = req.session.user;
    const response = await axios.post(
      "http://localhost:3006/api/checkPassword",
      { id: user.id, password }
    );
    res.json({ result: response.data.result });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.postModify = async (req, res, next) => {
  try {
    const { password, tel, email, birth } = req.body;
    const user = req.session.user;
    await axios.patch(`http://localhost:3006/api/mypage/${user.id}`, {
      password,
      tel,
      email,
      birth,
    });
    res.redirect("/mypage");
  } catch (error) {
    console.error(error);
    next(error);
  }
};
