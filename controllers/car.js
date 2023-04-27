const { cars, hashtags } = require("../models");
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
    const offset = (pageNum - 1) * 2;
    const count = await cars.count({
      where: { user_id: req.user.id },
    });

    const totalPages = Math.ceil(count / 2);

    const Cars = await cars.findAll({
      // attributes: [
      //   "carNum",
      //   "model",
      //   "brand",
      //   "picture",
      //   "year",
      //   "mile",
      //   "fuel",
      //   "hashtag",
      // ],
      order: [["num", "DESC"]],
      where: { user_id: req.user.id },
      offset: offset,
      limit: 2,
    });
    //  console.log(Cars);
    res.render("carsale", {
      title: "내차팔기",
      Cars,
      currentPage: pageNum,
      totalPages,
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
      order: [["num", "DESC"]],
    });
    const isOwner = req.user && Cars.user_id === req.user.id;
    // console.log(isOwner, Cars.user_id, req.user.id);
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
// 이미지 경로 주소화시키기
// exports.uploadImg = (req, res) => {
//   console.log("req.file ===========>", req.files);
//   const urls = req.files.map((file) => {
//     return `/img/${file.filename}`;
//   });
//   res.json({ urls: urls });
//   res.status(200).send({
//     message: "ok",
//     fileInfo: req.files
//   });
// };
// 내차팔기 db 등록
exports.uploadImg = async (req, res, next) => {
  try {
    // const { carNum, from,} = req.body;
    const uploadedFiles = req.files;
    const uploadDir = path.join(__dirname, "carImg");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    console.log(uploadedFiles);

    const files = [];
    for (const file of uploadedFiles) {
      const oldPath = file.path;
      const newPath = path.join(uploadDir, file.filename);
      fs.renameSync(oldPath, newPath);
      files.push({ filename: file.filename, url: `/carImg/${file.filename}` });
    }
    // console.log("=======3", files);

    await cars.create({
      carNum: req.body.carNum,
      from: req.body.from,
      brand: req.body.brand,
      model: req.body.model,
      mile: req.body.mile,
      year: req.body.year,
      fuel: req.body.fuel,
      trans: req.body.trans,
      seater: req.body.seater,
      disp: req.body.disp,
      type: req.body.type,
      method: req.body.method,
      color: req.body.color,
      tel: req.body.tel,
      picture: req.body.urls,
      roof: req.body.roof,
      nav: req.body.nav,
      key: req.body.key,
      light: req.body.light,
      sensor: req.body.sensor,
      camera: req.body.camera,
      box: req.body.box,
      leather: req.body.leather,
      heated: req.body.heated,
      airbag: req.body.airbag,
      etc: req.body.etc,
      hashtag: req.body.hashtag,
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
    res.redirect("/car/carsale");
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
