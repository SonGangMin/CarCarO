exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send(`
      <script>
        alert('로그인이 필요합니다.');
        location.href = '/login';
      </script>
    `);
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

// board라우터에 쓰는 isLoggedIn 입니다.
exports.isLoggedIn2 = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send(`
      <script>
        alert('로그인이 필요합니다.');
        location.href = '/login';
      </script>
    `);
  }
};

exports.isLoggedIn3 = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send(`
      <script>
        alert('로그인이 필요합니다.');
        location.href = '/login';
      </script>
    `);
  }
};