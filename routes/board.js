const express = require("express");
const router = express.Router();
const { isLoggedIn2 } = require("../middlewares");
const {
  renderNewpost,
  createPost,
  renderBoardContent,
  renderBoard,
  renderSearch,
  renderEditPost,
  editPost,
  deletePost,
  createComment,
} = require("../controllers/board");

// 게시판기능
router.get("/", renderBoard); //게시판 입장
router.get("/newpost", isLoggedIn2, renderNewpost); // 게시글작성
router.post("/", isLoggedIn2, createPost); // 게시글작성
router.get("/:postId", renderBoardContent); // 게시글자세히보기
router.get("/search/:result", renderSearch); //검색
router.get("/edit/:postId", renderEditPost); //수정
router.post("/edit/:postId", editPost); //수정
router.post("/delete/:postId", deletePost); //게시글삭제

// 댓글기능
router.post("/:postId", createComment);
module.exports = router;
