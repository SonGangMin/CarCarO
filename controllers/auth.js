const bcrypt = require("bcrypt");
const passport = require("passport");
const { users } = require("../models");

exports.join = async (req, res, next) => {
  const { id, password, name, email, tel, birth } = req.body;

  try {
    const exUser = await users.findOne({ where: { id } });

    if (exUser) {
      return res.redirect("/join?error=exist");
    }
    // console.log(password);

    const hash = await bcrypt.hash(password, 12);

    await users.create({
      id,
      password: hash,
      name,
      email,
      tel,
      birth,
    });

    return res.redirect("/");
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

exports.login = (req, res, next) => {
  passport.authenticate("local", (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }

    if (!user) {
      return res.redirect(`/login/?loginError=${info.message}`);
    }
    return req.login(user, (loginError) => {
      // console.log('5555555555', user);
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      const previousUrl = req.headers.referer;
      return res.redirect(previousUrl);
    });
  })(req, res, next);
};

exports.logout = (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
};

exports.checkid = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await models.users.findOne({ where: { id } });
    if (user) {
      res.status(200).json({ message: "user exists" });
    } else {
      res.status(404).json({ message: "user does not exist" });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};
