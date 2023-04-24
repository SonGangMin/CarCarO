const express = require("express");
const {
  renderFindcar,
  renderSalecar,
  carsale,
  carsaleList,
} = require("../controllers/car");
// const {isLoggedIn2} = require('../middlewares');
const fs = require("fs");
const multer = require("multer");
const path = require("path");

const router = express.Router();

router.get("/findcar", renderFindcar);
router.get("/carsale", renderSalecar);

// 내차팔기 등록
try {
  fs.readdirSync("carImg");
} catch (error) {
  console.error("carImg 폴더가 없어 carImg 폴더를 생성합니다.");
  fs.mkdirSync("carImg");
}

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

router.post("/carsale", upload.single("picture"), carsale);

module.exports = router;
