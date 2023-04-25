const models = require("../../models");
const { Op } = require("sequelize");

exports.renderManager = (req, res) => {
  res.render("manager/managerpage", { title: "관리자페이지" });
};

exports.renderManagerBoard = async (req, res, next) => {
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
      order: [
        ["grade", "DESC"],
        ["createdAt", "DESC"],
      ],
      offset,
      limit: PAGE_SIZE,
    });
    // console.log("자료확인--", twits[0]);
    res.render("manager/managerBoard", {
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

exports.renderManagerBoardContent = async (req, res, next) => {
  try {
    const boardId = req.params.postId;
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
    const isOwner = req.user && board.user_id === req.user.id;
    res.render("manager/managerBoard_content", {
      board,
      isOwner,
      title: "게시글 내용 보기",
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.renderManagerBoardSearch = async (req, res, next) => {
  const query = req.query.result;

  if (!query) {
    return res.redirect("/");
  }
  try {
    const PAGE_SIZE = 15;
    const page = req.query.page ? parseInt(req.query.page, 10) : 1;
    const offset = (page - 1) * PAGE_SIZE;
    const total = await models.boards.count();
    const totalPages = Math.ceil(total / PAGE_SIZE);
    const results = await models.boards.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${query}%` } },
          { content: { [Op.like]: `%${query}%` } },
        ],
      },
      include: [
        {
          attributes: ["name"],
          model: models.users,
          as: "user",
        },
      ],
      order: [["createdAt", "DESC"]],
      offset,
      // limit: PAGE_SIZE,
    });

    res.render("manager/managerBoard_search", {
      results,
      query,
      title: `검색 결과: ${query}`,
      totalPages,
      currentPage: page,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.renderManagerBoardEdit = async (req, res, next) => {
  const postId = req.params.postId;
  try {
    const post = await models.boards.findOne({ where: { postId: postId } });
    if (!post) {
      throw new Error("존재하지 않는 게시글입니다.");
    }
    if (post.userId !== req.session.userId) {
      throw new Error("게시글 수정 권한이 없습니다.");
    }
    res.render("manager/managerBoard_edit", { post, title: "수정하기" });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.editManagerBoard = async (req, res, next) => {
  const postId = req.params.postId;
  const { title, content } = req.body;
  try {
    const post = await models.boards.findOne({ where: { postId: postId } });
    if (!post) {
      throw new Error("존재하지 않는 게시글입니다.");
    }
    await models.boards.update(
      { title, content },
      { where: { postId: postId } }
    );
    res.redirect(`/manager/managerboard/`);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.deleteManagerPost = async (req, res, next) => {
  const postId = req.params.postId;
  try {
    const post = await models.boards.findOne({ where: { postId: postId } });
    if (!post) {
      throw new Error("존재하지 않는 게시글입니다.");
    }
    if (post.userId !== req.session.userId) {
      throw new Error("게시글 삭제 권한이 없습니다.");
    }
    await models.boards.destroy({ where: { postId: postId } });
    res.redirect("/manager/managerboard/");
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.editManagerGradeup = async (req, res, next) => {
  const postId = req.params.postId;
  try {
    const post = await models.boards.findOne({ where: { postId } });
    if (!post) {
      throw new Error("존재하지 않는 게시글입니다.");
    }
    await models.boards.update({ grade: 2 }, { where: { postId } });
    res.redirect("/manager/managerboard");
  } catch (err) {
    console.error(err);
    next(err);
  }
};
exports.editManagerGradedown = async (req, res, next) => {
  const postId = req.params.postId;
  try {
    const post = await models.boards.findOne({ where: { postId } });
    if (!post) {
      throw new Error("존재하지 않는 게시글입니다.");
    }
    await models.boards.update({ grade: 1 }, { where: { postId } });
    res.redirect("/manager/managerboard");
  } catch (err) {
    console.error(err);
    next(err);
  }
};
