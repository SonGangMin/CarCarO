const models = require('../models');

exports.renderMain = async(req, res, next) => {
  const isMine = req.user && req.user.id;
  // const carNum = req.param
  try {
    const Cars = await models.cars.findAll({
      include: [
        {
          attributes: ["user_id"],
          model: models.likes,
          as: "likes",
        },
      ],
    });
    const isOwner = req.user && Cars.user_id === req.user.id;
    const status2 = Cars.status === 2;
    console.log("1111111111111111", Cars);
    res.render("index", {
      title: "CarCarO",
      twits: Cars,
      isOwner,
      status2,
      isMine,
    });
    
  } catch (error) {
    console.error(error);
    next(error);
  }
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


