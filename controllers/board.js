const models = require("../models");

exports.renderNewpost = (req, res, next) => {
  res.render("newpost", { title: "회원가입" });
};

exports.createPost = async (req, res, next) => {
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
    res.redirect("/board");
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.renderBoardContent = async (req, res, next) => {
  try {
    const boardId = req.params.id;
    const board = await models.boards.findOne({
      where: { postId: boardId },
      include: [
        {
          attributes: ["name"],
          model: models.users,
          as: "user",
        },
      ],
    });
    if (!board) {
      return res.status(404).send("해당 게시글을 찾을 수 없습니다.");
    }
    res.render("board_content", {
      board,
      title: "게시글 내용 보기",
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
