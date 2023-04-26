const express = require("express");
const {
  renderFindcar,
  renderSalecar,
  renderCarup,
  renderHashtag,
  uploadPost,
  uploadImg,
} = require("../controllers/car");
const { isLoggedIn } = require("../middlewares");
const fs = require("fs");
const multer = require("multer");
const path = require("path");

const router = express.Router();

router.get("/findcar", renderFindcar);
router.get("/carsale", isLoggedIn, renderSalecar);
router.get("/carupload", isLoggedIn, renderCarup);
router.get("/hashtag", isLoggedIn, renderHashtag);

// 내차팔기 등록
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "carImg/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.post("/img", upload.array("img", 10), uploadImg);

const upload2 = multer();
router.post("/carupload", uploadPost);
// =>{
//         // const {carNum, from, brand, model, mile, year, fuel, trans, picture, seater, disp, type, method, color, tel, roof, nav, key, light, sensor, camera, box, leather, heated, airbag, etc, hashtag } = req.body;

//         console.log('1111111111111111113', carNum, from, brand, model, mile, year, fuel, trans, picture, seater, disp, type, method, color, tel, roof, nav, key, light, sensor, camera, box, leather, heated, airbag, etc, hashtag );
//         res.status(300).send("lllllllllllllllllllllllllllllllllllll");
// });

module.exports = router;
