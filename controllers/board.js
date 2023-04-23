const models = require("../models");

exports.renderBoard = async (req, res, next) => {
  try {
    const PAGE_SIZE = 15;
    const page = req.query.page ? parseInt(req.query.page, 10) : 1;
    const offset = (page - 1) * PAGE_SIZE;
    const total = await models.boards.count();
    const totalPages = Math.ceil(total / PAGE_SIZE);

    const twits = await models.boards.findAll({
      nest: true,
      include: [
        {
          attributes: ["name"],
          model: models.users,
          as: "user",
        },
      ],
      order: [["createdAt", "DESC"]],
      offset,
      limit: PAGE_SIZE,
    });
    // console.log("자료확인--", twits[0]);
    res.render("board", {
      twits,
      title: "커뮤니티",
      totalPages,
      currentPage: page,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
exports.renderNewpost = (req, res, next) => {
  res.render("newpost", { title: "글 작성" });
};

exports.createPost = async (req, res, next) => {
  // console.log("req.body =>", req.body);
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
