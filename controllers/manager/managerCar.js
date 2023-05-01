const {cars, users} = require('../../models');


// 등록된 차리스트 뿌리기
exports.renderCar = async (req, res) => {
    try {
        const pageNum = parseInt(req.query.page) || 1;
        const limit = 5;
        const offset = (pageNum - 1) * limit;
    
        // 전체 데이터 수 구하기
        const countResult = await cars.findAndCountAll({
        });
        const totalCount = countResult.count;
    
        const totalPages = Math.ceil(totalCount / limit);
    
        const Cars = await cars.findAll({
          attributes: [
            "carNum",
            "model",
            "brand",
            "picture",
            "year",
            "mile",
            "fuel",
            "hashtag",
          ],
          order: [["num", "DESC"]],
          offset: offset,
          limit: limit,
        });
    
        res.render("manager/managerCar", {
          title: "내차팔기",
          Cars,
          currentPage: pageNum,
          totalPages,
          totalCount, // 전체 데이터 수 추가
        });
      } catch (error) {
        console.error(error);
        next(error);
      }
};