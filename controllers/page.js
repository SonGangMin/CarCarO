exports.renderMain = (req, res) => {
  res.render("index", { title: "CarcarO"});
};
// exports.renderMain = (req, res) => {
//   const usergrade = req.user && req.user.grade === 2;
//   console.log(usergrade);
//   res.render("index", { title: "CarcarO", usergrade });
// };
// 로그인, 회원가입
exports.renderJoin = (req, res) => {
  res.render("join", { title: "회원가입" });
};

exports.renderLogin = (req, res) => {
  res.render("login", { title: "로그인" });
};

// 마이페이지
exports.renderMypage = (req, res) => {
  res.render("mypage", { 
    title: "마이페이지",
});
};
