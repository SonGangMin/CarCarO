const passport = require('passport');
const KaKaoStrategy = require('passport-kakao').Strategy;

const {users} = require('../models');

module.exports = () => {
    passport.use(new KaKaoStrategy({
        clientID: process.env.KAKAO_ID,
        callbackURL: '/auth/kakao/callback',
    }, async (accessToken, refreshToken, profile, done) => {
        console.log('kakao profile', profile);
        try{
            const exUser = await users.findOne({
                where: {snsId: profile.id, provider: 'kakao'},
            });
            if(exUser){
                done(null, exUser);
            } else{
                const newUser = await users.create({
                    email: profile.
                })
            }
        }
    }))
}