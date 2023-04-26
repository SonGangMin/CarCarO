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
} = require("../controllers/board");

router.get("/", renderBoard);
router.get("/newpost", isLoggedIn2, renderNewpost);
router.post("/", isLoggedIn2, createPost);
router.get("/:postId", renderBoardContent);
router.get("/search/:result", renderSearch);

router.get("/edit/:postId", renderEditPost);
router.post("/edit/:postId", editPost);

router.post("/delete/:postId", deletePost);

module.exports = router;
