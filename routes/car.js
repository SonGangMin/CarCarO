const express = require("express");
const {
  renderFindcar,
  renderSalecar,
  renderCarup,
  renderHashtag,
  uploadPost,
  renderDetail,
  uploadImg,
} = require("../controllers/car");
const { isLoggedIn } = require("../middlewares");
const fs = require("fs");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// 내차찾기 페이지
router.get("/findcar", renderFindcar);
// 내차팔기 리스트 페이지
router.get("/carsale", isLoggedIn, renderSalecar);
// 내차팔기 등록 페이지
router.get("/carupload", isLoggedIn, renderCarup);
// 내차팔기 리스트 상세 페이지
router.get("/detail/:carNum", renderDetail);
// 해시태그 검색 리스트 페이지
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

// 내차 등록 이미지 업로드
router.post("/img", upload.single("img"), uploadImg);

const upload2 = multer();
router.post("/carupload", uploadPost);


// 페이지네이션
const data = [ /* your data here */ ];
const itemsPerPage = 10;
const totalPages = Math.ceil(data.length / itemsPerPage);

// In your route handler function

module.exports = router;
