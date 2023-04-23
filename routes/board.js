const express = require("express");
const router = express.Router();
const { isLoggedIn2 } = require("../middlewares");
const {
  renderNewpost,
  createPost,
  renderBoardContent,
  renderBoard,
} = require("../controllers/board");

router.get("/", renderBoard);
router.get("/newpost", isLoggedIn2, renderNewpost);
router.post("/", isLoggedIn2, createPost);
router.get("/:id", renderBoardContent);

module.exports = router;
