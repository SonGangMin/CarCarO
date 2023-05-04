const models = require('../models');
const {hashtags, advertises} = require('../models')
const { Op } = require("sequelize");

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
        {
          attributes: ["cars_hashtag"],
          model: hashtags,
          as: "hashtags",
        },
      ],
      order: [['createdAt','desc']],
    });
    const isOwner = req.user && Cars.user_id === req.user.id;
    const status2 = Cars.status === 2;
    
    const Adver = await advertises.findAll({

    })

    res.render("index", {
      title: "CarCarO",
      twits: Cars,
      isOwner,
      status2,
      isMine,
      Adver
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

exports.hashtagsearch =  async (req, res, next) => {
  const query = req.query.hashtag;
  if (!query) {
    return res.redirect("/page");
  }
  try {
    const PAGE_SIZE = 15;
    const page = req.query.page ? parseInt(req.query.page, 10) : 1;
    const offset = (page - 1) * PAGE_SIZE;
    const total = await models.cars.count();
    const totalPages = Math.ceil(total / PAGE_SIZE);
    const results = await models.cars.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${query}%` } },
          { content: { [Op.like]: `%${query}%` } },
        ],
      },
      order: [["createdAt", "DESC"]],
      offset,
      limit: PAGE_SIZE,
    });
    res.render("hashtagsearch", {
      results,
      title: `검색 결과: ${query}`,
      totalPages,
      currentPage: page,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
