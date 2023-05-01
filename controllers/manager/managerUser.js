const {users} = require('../../models');


// 회원리스트 뿌리기
exports.renderUser = async (req, res) => {
    const pageNum = parseInt(req.query.page) || 1;
    const limit = 5;
    const offset = (pageNum - 1) * limit;
    const countResult = await users.findAndCountAll({
        // where: { id: req.user.id },
    });
    const totalCount = countResult.count;

    const totalPages = Math.ceil(totalCount / limit);
    try{
        const User = await users.findAll({
            order: [["no", "DESC"]],
            offset: offset,
            limit: limit,
        });
        res.render('manager/managerUser', {
            title: "유저관리",
            User,
            currentPage: pageNum,
            offset: offset,
            totalPages,
            totalCount, // 전체 데이터 수 추가
        });
    } catch(error){
        console.error(error);
    }
};

// 회원 권한 수정
exports.gradeEdit = async (req, res, next) => {
    const userId = req.params.id;
    try{
        const User = await users.findOne({ where: { id: userId } });
        if(User.grade === 1){
            await users.update({ grade: 2 }, { where: { id: userId } });
        }else if(User.grade === 2){
            await users.update({ grade: 1 }, { where: { id: userId } });
        }
        res.redirect('/manager/managerUser');
    } catch(error){
        console.error(error);
        next(error);
    }
};

// 회원 탈퇴 시키기
exports.deleteEdit = async (req, res, next) => {
    const userId = req.params.id;
    try{
        const User = await users.destroy({
            where: {id: userId}
        });
        res.redirect('/manager')
    } catch(error){
        console.error(error);
        next(error);
    }
};