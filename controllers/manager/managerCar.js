const {cars, users} = require('../../models');


// 등록된 차리스트 뿌리기
exports.renderCar = async (req, res) => {
    try {
        const pageNum = parseInt(req.query.page) || 1;
        const limit = 5;
        const offset = (pageNum - 1) * limit;
    
        // 전체 데이터 수 구하기
        const countResult = await cars.findAndCountAll({
          where: {status: 1},
        });
        const totalCount = countResult.count;
    
        const totalPages = Math.ceil(totalCount / limit);
    
        const Cars = await cars.findAll({
          order: [
            ["recommends", "DESC"],
            ["num", "DESC"]
          ],
          where: {status: 1},
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

// 판매완료 리스트
exports.renderSaleComp = async (req, res) => {
    try {
        const pageNum = parseInt(req.query.page) || 1;
        const limit = 5;
        const offset = (pageNum - 1) * limit;
    
        // 전체 데이터 수 구하기
        const countResult = await cars.findAndCountAll({
          where: {status: 2},
        });
        const totalCount = countResult.count;
    
        const totalPages = Math.ceil(totalCount / limit);
    
        const Cars = await cars.findAll({
          order: [["num", "DESC"]],
          where: {status: 2},
          offset: offset,
          limit: limit,
        });
    
        res.render("manager/managerSaleComp", {
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

// 차량상세
exports.renderDetail = async (req, res, next) => {
  const carNum = req.params.carNum;
  try {
    const Cars = await cars.findOne({
      where: { carNum },
    });
    const isOwner = req.user && Cars.user_id === req.user.id;
    const status2 = cars.status === 2;
    // console.log("Cars.user_id====================", Cars.user_id);
    // console.log("users.id=======================", req.user.id);
    res.render("manager/managerDetail", {
      title: Cars.model,
      Cars,
      isOwner,
      status2,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// 추천차량등록
exports.addRecommend = async (req, res, next) => {
  const carNum = req.params.carNum;
  try{
    const recommend = await cars.findOne({where: {carNum}});
    if(recommend.recommends === 0){
      await cars.update({recommends: 1}, {where: {carNum}});
    } else if(recommend.recommends === 1){
      await cars.update({recommends: 0}, {where: {carNum}});
    }
    res.redirect('/manager/managerCar');
  } catch(error){
    console.error(error);
    next(error);
  }
};

// 판매완료
exports.saleComp = async (req, res, next) => {
  const { carNum } = req.params;
  try {
    const Cars = await cars.update({ status: 2 }, { where: { carNum } });

    res.redirect(`/manager/managerCar/saleComp`);
  } catch (error) {
    console.error(error);
    next(error);
  }
};


// 판매완료 취소처리
exports.saleCancle = async (req, res, next) => {
  const { carNum } = req.params;
  try {
    await cars.update({ status: 1 }, { where: { carNum } });
    res.status(200).send({ success: true });
  } catch (error) {
    console.error(error);
    next(error);
  }
};