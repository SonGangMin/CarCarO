const models = require('../models');

exports.renderMain = (req, res) => {
  res.render("index", { title: "CarcarO"});
};
// exports.renderMain = (req, res) => {
//   const usergrade = req.user && req.user.grade === 2;
//   console.log(usergrade);
//   res.render("index", { title: "CarcarO", usergrade });
// };
// 로그인, 회원가입
exports.renderJoin = async(req, res) => {
  const users = await models.users.findAll({
    attributes: ["id"]
  });
  res.render("join", { users,title: "회원가입"});
  // res.json(users);
};

exports.renderLogin = (req, res) => {
  res.render("login", { title: "로그인" });
};

// 마이페이지


