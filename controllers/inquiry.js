const { inquiry } = require('../models');

exports.uploadInquiry = async ( req, res, next ) => {
    try {
        await inquiry.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.body.user_id,
        });
    }catch (error) {
    console.error(error);
    next(error);
    }
};