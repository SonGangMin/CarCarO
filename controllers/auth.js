const bcrypt = require('bcrypt');
const passport = require('passport');
const {users} = require('../models');

exports.join = async (req, res, next) => {
    const {id, password, name, email, tel, birth} = req.body;

    try{

        const exUser = await users.findOne({where: {id}});

        if(exUser){
            return res.redirect('/join?error=exist');
        }
        console.log(password);

        const hash = await bcrypt.hash(password, 12);

        await users.create({
            id,
            password: hash,
            name,
            email,
            tel,
            birth,
        });

        return res.redirect('/');
    } catch(error){
        console.error(error);
        return next(error);
    }

}

exports.login = (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        if(authError){
            console.error(authError);
            return next(authError);
        }

        
        if(!user){
            return res.redirect(`/login/?loginError=${info.message}`);
        }
        return req.login(user, (loginError) => {
            console.log('5555555555', user);
            if(loginError){
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/');
        });
    })(req, res, next);
};

exports.logout = (req, res) => {
    req.logout(() => {
        res.redirect('/');
    });
};