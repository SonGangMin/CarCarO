const models = require('../../models')

exports.renderManagerFaq = async (req, res, next) => {
    try {
        const PAGE_SIZE = 15;
        const page = req.query.page ? parseInt(req.query.page, 10) : 1;
        const offset = (page - 1) * PAGE_SIZE;
        const total = await models.faqs.count();
        const totalPages = Math.ceil(total / PAGE_SIZE);

        const twits = await models.faqs.findAll({
        nest: true,
        order: [
            ["createdAt", "DESC"],
        ],
        offset,
        limit: PAGE_SIZE
        });
      // console.log("자료확인--", twits[0]);
        res.render("manager/managerFaq", {
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

exports.renderUpdate = async (req, res, next) => {
    const title = req.params.title;
    try {
        const faq = await models.faqs.findOne({ where: { title: title } });
    if (!faq) {
        throw new Error("존재하지 않는 글입니다.");
        }
        res.render("manager/managerFaq_edit", { faq, title: "수정하기" });
    } catch (err) {
        console.error(err);
        next(err);
    }
};

exports.updateManagerFaq = async (req, res, next) => {
    const title = req.params.title;
    // const { title, content } = req.body;
    try {
        const post = await models.title.findOne({ where: { postId: postId } });
    if (!post) {
        throw new Error("존재하지 않는 게시글입니다.");
        }
    if (post.userId !== req.session.userId) {
        throw new Error("게시글 수정 권한이 없습니다.");
        }
        await models.title.update(
        { title, content },
        { where: { postId: postId } }
        );
        res.redirect(`/board/${postId}`);
    } catch (err) {
        console.error(err);
        next(err);
    }
};