const { users, cars } = require("../../models");
const {
  getPagingDataCount,
  getPagination,
  getPagingData,
} = require("../pagination");

// 회원리스트 뿌리기
exports.renderUser = async (req, res) => {
  const page = req.query.page ? parseInt(req.query.page, 10) : 1;
  const { limit, offset } = getPagination(page, 15);
  try {
    const listCount = await users.findAndCountAll({
      include: [
        {
          attributes: ["num"],
          model: cars,
        },
      ],
      order: [
        ["grade", "DESC"],
        ["no", "ASC"],
      ],
      offset,
      limit,
    });
    const { count, rows: Users } = listCount;
    const totalItems = await users.count({});
    const pagingData = getPagingDataCount(totalItems, page, limit);
    // res.json(Users);
    console.log("1111111111111111111111111111", totalItems);
    res.render("manager/managerUser", {
      title: "유저관리",
      Users,
      pagingData,
      totalItems,
    });
  } catch (error) {
    console.error(error);
  }
};

// 회원 권한 수정
exports.gradeEdit = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const User = await users.findOne({ where: { id: userId } });
    if (User.grade === 1) {
      await users.update({ grade: 2 }, { where: { id: userId } });
    } else if (User.grade === 2) {
      await users.update({ grade: 1 }, { where: { id: userId } });
    }
    res.redirect("/manager/managerUser");
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// 회원 탈퇴 시키기
exports.deleteEdit = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const User = await users.destroy({
      where: { id: userId },
    });
    res.redirect("/manager/managerUser");
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.renderUserCarsale = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const Cars = await cars.findAndCountAll({
      where: { user_id: userId },
      order: [["createdAt", "DESC"]],
    });
    const { count, rows: twits } = Cars;
    res.render("manager/managerUser_carsale", {
      userId,
      count,
      twits,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
