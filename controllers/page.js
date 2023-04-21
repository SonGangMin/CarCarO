// 메인 페이지
exports.renderMain = (req, res) => {
    res.render('index', {title: 'CarcarO'});
};


// 로그인, 회원가입
exports.renderJoin = (req, res) => {
    res.render('join', {title: '회원가입'});
};

exports.renderLogin = (req, res) => {



    res.render('login', {title: '로그인'});
};


// 내차 찾기, 내차 팔기
exports.renderFindcar = (req, res) => {
    res.render('findcar', {title: '내차찾기'});
};

exports.renderSalecar = (req, res) => {
    res.render('carsale', {title: '내차팔기'});
};


