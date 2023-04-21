const express = require('express');
const router = express.Router();
const models = require('../models')
const path = require('path');
const fs = require('fs');
const { uploadInquiry } = require('../controllers/inquiry');
const { isLoggedIn } = require('../middlewares');

router.get('/', async (req, res, next) => {
    try {
      const faq = await models.faqs.findAll({
        nest: true,
        order: [["createdAt", "DESC"]],
      });
      console.log("자료확인--", faq[0]);
      res.render("faq", {
        twits: faq,
        title: 'FAQ',
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

router.get('/inquiry', function(req, res, next) {
    res.render('inquiry',{title: '1:1문의'});
});

router.post('/', function(req, res, next) {
    const title = req.body.title;
    const content = req.body.content;
    const user_id = req.body.user_id;
    models.inquiry.create({
        title: title,
        content: content,
        user_id: user_id,
    }).then(result => {
        console.log(result);
        res.redirect('/faq');
    }).catch(err => {
        console.error(err);
        next(err);
    });
})

router.post('/', isLoggedIn, uploadInquiry);

module.exports = router;
