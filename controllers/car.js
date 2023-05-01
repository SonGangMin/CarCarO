const { cars, hashtags, users, likes } = require("../models");
const moment = require("moment");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { Op } = require("sequelize");

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
    const twentyFourHoursAgo = moment().subtract(24, "hours").toDate();
    const recenttotal = await cars.count({
      where: {
        createdAt: {
          [Op.gte]: twentyFourHoursAgo,
        },
      },
    });
    const twits = await cars.findAll({
      attributes: [
        "carNum",
        "model",
        "brand",
        "picture",
        "year",
        "mile",
        "fuel",
        "hashtag",
        "from",
        "user_id",
        "likes_count",
        "price",
      ],
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
      recenttotal,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
exports.carLike = async (req, res, next) => {
  try {
    await likes.create({
      number: null,
      car_num: req.body.carNum,
      user_id: req.user.id,
    });
    res.redirect("back");
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// 내차찾기 검색
exports.renderCarSearch = async (req, res, next) => {
  try {
    const PAGE_SIZE = 16;
    const page = req.query.page ? parseInt(req.query.page, 10) : 1;
    const offset = (page - 1) * PAGE_SIZE;
    const total = await cars.count();
    const totalPages = Math.ceil(total / PAGE_SIZE);
    const isMine = req.user && req.user.id;
    const twentyFourHoursAgo = moment().subtract(24, "hours").toDate();
    const recenttotal = await cars.count({
      where: {
        createdAt: {
          [Op.gte]: twentyFourHoursAgo,
        },
      },
    });
    const {
      from,
      brand,
      model,
      lowprice,
      highprice,
      trans,
      startyear,
      endyear,
      fuel,
      shortmile,
      longmile,
    } = req.query;

    const where = {
      price: {
        [Op.between]: [lowprice, highprice],
      },
      year: {
        [Op.between]: [startyear, endyear],
      },
      mile: {
        [Op.between]: [shortmile, longmile],
      },
      model: {
        [Op.like]: [`%${model}%`],
      },
    };

    if (trans) {
      where.trans = trans;
    }
    if (from) {
      where.from = from;
    }
    if (brand) {
      where.brand = brand;
    }
    if (fuel) {
      where.fuel = fuel;
    }

    const Cars = await cars.findAll({
      where,
      order: [["num", "DESC"]],
      offset,
      limit: PAGE_SIZE,
    });

    res.render("carfind_search", {
      Cars,
      title: "차량검색결과",
      totalPages,
      currentPage: page,
      isMine,
      total,
      recenttotal,
      from,
      brand,
      model,
      lowprice,
      highprice,
      trans,
      startyear,
      endyear,
      fuel,
      shortmile,
      longmile,
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
  try {
    const Cars = await cars.findOne({
      where: { carNum },
    });
    const isOwner = req.user && Cars.user_id === req.user.id;
    const status2 = Cars.status === 2;
    // console.log("Cars.user_id====================", Cars.user_id);
    // console.log("users.id=======================", req.user.id);
    res.render("cardetail", {
      title: Cars.model,
      Cars,
      isOwner,
      status2,
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

// 판매완료
exports.saleComp = async (req, res, next) => {
  const { carNum } = req.params;

  try {
    const Cars = await cars.update(
      { status: 2 },
      { where: { carNum } }
    );

    res.redirect(`/car/detail/${carNum}`);
  } catch (error) {
    console.error(error);
    next(error);
  }
};