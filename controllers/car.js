const {cars} = require('../models');
const multer = require('multer');

// 내차팔기 db 등록
exports.carsale = async (req, res, next) => {
    console.log('req.file =', req.file);

//   console.log("req.body =>", req.body);
    try{
        await cars.create({
            carNum: req.body.carNum,
            from: req.body.from,
            brand: req.body.brand,
            model: req.body.model,
            mile: req.body.mile,
            year: req.body.year,
            fuel: req.body.fuel,
            trans: req.body.trans,
            seater: req.body.seater,
            disp: req.body.disp,
            type: req.body.type,
            method: req.body.method,
            color: req.body.color,
            tel: req.body.tel,
            picture: req.file.filename,
            roof: req.body.roof,
            nav: req.body.nav,
            key: req.body.key,
            light: req.body.light,
            sensor: req.body.sensor,
            camera: req.body.camera,
            box: req.body.box,
            leather: req.body.leather,
            heated: req.body.heated,
            airbag: req.body.airbag,
            etc: req.body.etc,
            hashtag: req.body.hashtag,
            num: null,
            user_id: req.user.id,
        });
        res.redirect('/');
    } catch(error){
        console.error(error);
        next(error);
    }
    console.log('req.file =', req.file);
}