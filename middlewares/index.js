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

//관리자인지 아닌지 확인
exports.isManager = (req, res, next) => {
  const isOwner = req.user && req.user.grade === 2;
  // console.log(isOwner);
  if (isOwner) {
    next();
  } else {
    res.status(403).send(`
    <script>
      alert('관리자도 아닌새끼가 어딜?');
      location.href = '/';
    </script>
  `);
  }
};


exports.isMyId = (req,res,next)=>{
  const myId = req.user && req.user.id === req.params.id;
  console.log('req.user.id=================>',req.user&&req.user.id)
  console.log('req.params.id================>',req.params.id)
  if(myId){
    next();
  }else{
    res.status(403).send(`
    <script>
    alert('지 아뒤도 아닌게 어딜?');
    location.href = '/';
  </script>
    `)
  }
}