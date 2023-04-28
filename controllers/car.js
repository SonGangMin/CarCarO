const { cars, hashtags, users } = require("../models");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// 내차 찾기, 내차 팔기
// 내차찾기 페이지
exports.renderFindcar = async (req, res, next) => {
  try {
    const PAGE_SIZE = 16;
    const page = req.query.page ? parseInt(req.query.page, 10) : 1;
    const offset = (page - 1) * PAGE_SIZE;
    const total = await cars.count();
    const totalPages = Math.ceil(total / PAGE_SIZE);
    const isMine = req.user && req.user.id;
    const twits = await cars.findAll({
      // attributes: [
      //   "carNum",
      //   "model",
      //   "brand",
      //   "picture",
      //   "year",
      //   "mile",
      //   "fuel",
      //   "hashtag",
      //   "from",
      //   "user_id",
      //   "likes_count",
      // ],
      order: [["num", "DESC"]],
      offset,
      limit: PAGE_SIZE,
    });
    res.render("carfind", {
      title: "내차찾기",
      twits,
      totalPages,
      currentPage: page,
      isMine,
      total,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// 등록된차 리스트 페이지
exports.renderSalecar = async (req, res, next) => {
  try {
    const pageNum = parseInt(req.query.page) || 1;
    const limit = 5;
    const offset = (pageNum - 1) * limit;

    // 전체 데이터 수 구하기
    const countResult = await cars.findAndCountAll({
      where: { user_id: req.user.id },
    });
    const totalCount = countResult.count;

    const totalPages = Math.ceil(totalCount / limit);

    const Cars = await cars.findAll({
      attributes: [
        "carNum",
        "model",
        "brand",
        "picture",
        "year",
        "mile",
        "fuel",
        "hashtag",
      ],
      order: [["num", "DESC"]],
      where: { user_id: req.user.id },
      offset: offset,
      limit: limit,
    });

    res.render("carsale", {
      title: "내차팔기",
      Cars,
      currentPage: pageNum,
      totalPages,
      totalCount, // 전체 데이터 수 추가
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// 등록된 차량 상세
exports.renderDetail = async (req, res, next) => {
  const carNum = req.params.carNum;
  const isOwner = req.user && cars.user_id === users.id;
  try {
    const Cars = await cars.findOne({
      where: { carNum },
    });

    res.render("cardetail", {
      title: Cars.model,
      Cars,
      isOwner,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// 내차팔기 등록 페이지
exports.renderCarup = (req, res) => {
  res.render("carupload", { title: "내차등록하기" });
};

// 내차팔기 db 등록
exports.uploadPost = async (req, res, next) => {
  console.log("333333333333333333", req.body.disp);
  console.log("2222222222222222222222222222222222->", req.body.leather);
  const {
    carNum,
    from,
    brand,
    model,
    mile,
    year,
    fuel,
    trans,
    seater,
    disp,
    type,
    method,
    color,
    tel,
    roof,
    nav,
    key,
    light,
    sensor,
    camera,
    box,
    leather,
    heated,
    airbag,
    etc,
    price,
    hashtag,
  } = req.body;
  console.log("req.files ==============", req.files);
  try {
    const files = [];
    for (const file of req.files) {
      files.push({ filename: file.filename, url: `/carImg/${file.filename}` });
    }
    const Cars = await cars.create({
      carNum,
      from,
      brand,
      model,
      mile,
      year,
      fuel,
      trans,
      picture: files,
      seater,
      disp,
      type,
      method,
      color,
      tel,
      roof,
      nav,
      key,
      light,
      sensor,
      camera,
      box,
      leather,
      heated,
      airbag,
      etc,
      price,
      hashtag,
      num: null,
      user_id: req.user.id,
    });
    const Hashtags = req.body.hashtag.match(/#[^\s#]*/g);
    if (Hashtags) {
      const result = await Promise.all(
        Hashtags.map((tag) => {
          return hashtags.findOrCreate({
            where: { cars_hashtag: tag.slice(1).toLowerCase() },
          });
        })
      );
      // await post.addHashtags(result.map(r => r[0]));
    }

    res.status(200).json({ msg: "/car/carsale" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// 해시태그
exports.renderHashtag = async (req, res, next) => {
  const query = req.query.hashtag;
  if (!query) {
    return res.redirect("/");
  }
  try {
    const hashtag = await hashtags.findOne({ where: { title: query } });
    let cars = [];
    if (hashtag) {
      cars = await hashtag.getPosts({
        include: [{ model: cars }],
      });
    }

    return res.render("carsale", {
      title: `${query}`,
      twits: cars,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

// 리스트 수정
exports.carEdit = async (req, res, next) => {
  try {
    const carNum = req.params.carNum;
    const Cars = await cars.findOne({
      where: {
        carNum,
      },
    });
    res.render("caredit", {
      title: "내차 수정하기",
      Cars,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// 수정 등록
exports.editBtn = async (req, res, next) => {
  try {
    const carNum = req.params.carNum === cars.carNum;
    const Cars = await cars.update({
      where: {
        carNum,
      },
    });
    res.redirect("caredit", {
      title: "내차 수정하기",
      Cars,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// 게시글, 리스트 삭제
exports.listDelete = async (req, res, next) => {
  try {
    const carNum = req.params.carNum;
    console.log("lllllllll->", req.params.carNum);
    await cars.destroy({
      where: { carNum },
    });
    res.redirect("/car/carsale");
  } catch (error) {
    console.error(error);
    next(error);
  }
};
