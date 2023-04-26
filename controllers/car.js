const { cars, hashtags } = require("../models");
const multer = require("multer");

// 내차 찾기, 내차 팔기
exports.renderFindcar = (req, res) => {
  res.render("findcar", { title: "내차찾기" });
};

// 내차팔기 리스트
exports.renderCarup = (req, res) => {
  res.render("carupload", { title: "내차등록하기" });
};

// 등록된차 데이터 받기
exports.renderSalecar = async (req, res, next) => {
  try {
    const Cars = await cars.findAll({
      attributes: [
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
    });
    //  console.log(Cars);
    res.render("carsale", {
      title: "내차팔기",
      Cars,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// 이미지 경로 주소화시키기
exports.uploadImg = (req, res) => {
  console.log("req.file ===========>", req.files);
  res.send("Upload Success");
  // res.json({ url: `/img/${req.file.filename}` });
};

// 내차팔기 db 등록
exports.uploadPost = async (req, res, next) => {
  const { carNum } = req.body;
  try {
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
      picture: req.body.url,
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
