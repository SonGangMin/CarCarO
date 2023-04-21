const express = require("express");
const router = express.Router();
const models = require("../models");
const multer = require("multer");
const { isLoggedIn2 } = require("../middlewares");

router.get("/", async (req, res, next) => {
  try {
    const Board = await models.boards.findAll({
      nest: true,
      include: [
        {
          attributes: ["name"],
          model: models.users,
          as: "user",
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    console.log("자료확인--", Board[0]);
    res.render("board", {
      twits: Board,
      title: "커뮤니티",
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/newpost", (req, res, next) => {
  res.render("newpost", { title: "회원가입" });
});

// const upload = multer();
router.post("/", isLoggedIn2, async (req, res, next) => {
  console.log("req.body =>", req.body);
  try {
    await models.boards.create({
      postId: null,
      title: req.body.title,
      content: req.body.content,
      createdAt: null,
      updatedAt: null,
      user_id: req.user.id,
    });
    res.redirect("/boards");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
