exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send("로그인 필요");
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    const message = encodeURIComponent("로그인한 상태입니다.");
    res.redirect(`/?error=${message}`);
  }
};

exports.isLoggedIn2 = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send(`
      <script>
        alert('로그인이 필요합니다.');
        location.href = '/boards';
      </script>
    `);
  }
};
