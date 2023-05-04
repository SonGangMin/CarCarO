const express = require('express');
const router = express.Router();
const {isManager} = require('../../middlewares/');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const {
    renderAdvertise,
    renderAddAdvertise,
    afterUploadImage,
    renderAdverDetail
} = require('../../controllers/manager/advertise');

// 광고관리 페이지
router.get('/', isManager, renderAdvertise);
// 광고등록 페이지
router.get('/addAdvertise', isManager, renderAddAdvertise);
// 광고상세 페이지
router.get('/adverDetail/:no', isManager, renderAdverDetail);

// 광고등록
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb){
            cb(null, 'adverImg/');
        },
        filename(req, file, cb){
            const ext = path.extname(file.originalname);
            cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: {fileSize: 5 * 1024 * 1024},
});

router.post('/adverImg', upload.array('files'), afterUploadImage);



module.exports = router;