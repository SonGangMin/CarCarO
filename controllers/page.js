const models = require("../models");

// 메인 페이지
exports.renderMain = (req, res) => {
  res.render("index", { title: "CarcarO" });
};

// 로그인, 회원가입
exports.renderJoin = (req, res) => {
  res.render("join", { title: "회원가입" });
};

exports.renderLogin = (req, res) => {
  res.render("login", { title: "로그인" });
};

// 내차 찾기, 내차 팔기
exports.renderFindcar = (req, res) => {
  res.render("findcar", { title: "내차찾기" });
};

exports.renderSalecar = (req, res) => {
  res.render("carsale", { title: "내차팔기" });
};

// 마이페이지
exports.renderMypage = (req, res) => {
  res.render("mypage", { title: "마이페이지" });
};
// 커뮤니티
exports.renderBoard = async (req, res, next) => {
  try {
    const PAGE_SIZE = 15;
    const page = req.query.page ? parseInt(req.query.page, 10) : 1;
    const offset = (page - 1) * PAGE_SIZE;
    const total = await models.boards.count();
    const totalPages = Math.ceil(total / PAGE_SIZE);

    const twits = await models.boards.findAll({
      nest: true,
      include: [
        {
          attributes: ["name"],
          model: models.users,
          as: "user",
        },
      ],
      order: [["createdAt", "DESC"]],
      offset,
      limit: PAGE_SIZE,
    });
    // console.log("자료확인--", twits[0]);
    res.render("board", {
      twits,
      title: "커뮤니티",
      totalPages,
      currentPage: page,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
