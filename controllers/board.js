const models = require("../models");
const { Op } = require("sequelize");

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
      order: [
        ["grade", "DESC"],
        ["createdAt", "DESC"],
      ],
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
  res.render("board_newpost", { title: "글 작성" });
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
    // console.log("========================", req.user && req.user.id);
    const user = req.user && req.user.id;
    const isUser = user !== undefined;
    // console.log(isUser);
    const comments = await models.comments.findAll({
      where: { post_id: req.params.postId },
      include: [
        {
          attributes: ["name"],
          model: models.users,
          as: "user",
        },
      ],
      order: [["createdAt", "ASC"]],
    });
    const isboardOwner = req.user && board.user_id === req.user.id;
    const userId = req.user && req.user.id;
    console.log(userId);
    res.render("board_content", {
      board,
      isboardOwner,
      title: "게시글 내용 보기",
      comments,
      isUser,
      userId,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.renderSearch = async (req, res, next) => {
  const query = req.query.result;

  if (!query) {
    return res.redirect("/board");
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
      limit: PAGE_SIZE,
    });
    res.render("board_search", {
      results,
      title: `검색 결과: ${query}`,
      totalPages,
      currentPage: page,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.renderEditPost = async (req, res, next) => {
  const postId = req.params.postId;
  try {
    const post = await models.boards.findOne({ where: { postId: postId } });
    if (!post) {
      throw new Error("존재하지 않는 게시글입니다.");
    }
    if (post.userId !== req.session.userId) {
      throw new Error("게시글 수정 권한이 없습니다.");
    }
    res.render("board_edit", { post, title: "수정하기" });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.editPost = async (req, res, next) => {
  const postId = req.params.postId;
  const { title, content } = req.body;
  try {
    const post = await models.boards.findOne({ where: { postId } });
    if (!post) {
      throw new Error("존재하지 않는 게시글입니다.");
    }
    if (post.userId !== req.session.userId) {
      throw new Error("게시글 수정 권한이 없습니다.");
    }
    await models.boards.update({ title, content }, { where: { postId } });
    res.redirect(`/board/${postId}`);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  const postId = req.params.postId;
  try {
    const post = await models.boards.findOne({ where: { postId } });
    if (!post) {
      throw new Error("존재하지 않는 게시글입니다.");
    }
    if (post.userId !== req.session.userId) {
      throw new Error("게시글 삭제 권한이 없습니다.");
    }
    await models.boards.destroy({ where: { postId: postId } });
    res.redirect("/board");
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.createComment = async (req, res, next) => {
  // console.log("req.body =>", req.body);
  // console.log("==========", req.params.postId);
  postId = req.params.postId;
  try {
    await models.comments.create({
      number: null,
      content: req.body.content,
      createdAt: null,
      updatedAt: null,
      user_id: req.user.id,
      post_id: req.params.postId,
    });
    res.redirect(`/board/${postId}`);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.deleteComment = async (req, res, next) => {
  const commentId = req.params.commentId;
  try {
    const comment = await models.comments.findOne({
      where: { number: commentId },
    });
    // if (!comment) {
    //   throw new Error("존재하지 않는 게시글입니다.");
    // }
    // if (comment.user_id !== req.session.userId) {
    //   throw new Error("게시글 삭제 권한이 없습니다.");
    // }
    await models.comments.destroy({ where: { number: commentId } });
    res.redirect("back");
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.editComment = async (req, res, next) => {
  const commentId = req.params.commentId;
  const { content } = req.body;
  try {
    await models.comments.update({ content }, { where: { number: commentId } });
    res.redirect("back");
  } catch (err) {
    console.error(err);
    next(err);
  }
};
