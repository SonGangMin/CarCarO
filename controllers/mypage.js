// @ts-check

const models = require('../models');
exports.renderMypage = (req, res) => {
    res.render("mypage", {
        title: "마이페이지",
    });}
// 회원 정보 수정 페이지 렌더링 처리
exports.renderEditPage = async (req, res) => {
    try {

        const id = req.params.id // 사용자 아이디
        console.log('ee=========ee', id)
        const user = await models.users.findAll({ where: { id: id}}); // 사용자 정보 조회
        res.render('modify', { user,title:'회원정보수정' }); // edit.ejs 뷰에 사용자 정보 전달
        console.log('ddd=========dd', id)
    } catch (err) {
        console.error(err);
        // res.status(500).send('서버 오류');
    }
};

// 회원 정보 수정 처리
exports.updateUserInfo = async (req, res) => {
    try {
        const Id = req.params.id;
        const { id, password, name, tel, email, birth } = req.body; // 폼 데이터 파싱

        // 사용자 정보 수정
        await models.users.update(
        { password, name, tel, email, birth},
        { where: { id } }
        );
        console.log('회원 정보가 수정되었습니다.');
        res.redirect(`/mypage/`); // 수정된 회원 정보 페이지로 리다이렉트`
    } catch (err) {
        console.error(err);
        res.status(500).send('서버 오류');
    }
};

// 회원 정보 수정 페이지 렌더링
exports.modifyPage = (req, res) => {
    res.render("edit", { title: "회원 정보 수정" });
}