const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'CarCarO'
});

db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log ('MySQL Connected...');
});

exports.renderEditPage = (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM users WHERE id = ?', [id], (err, result) => {
        if (err){
            throw err;
        }
        const user = result[0];
        res.render('edit', { user });
    });
};

exports.editUserInfo = (req, res) => {
    const { id, password, name, tel, email, birth } = req.body;
    db.query('UPDATE users SET password=?, name=?, tel=?, email=?, birth=? WHERE= id=?',
        [password, name, tel, email, birth, id], (err, result) => {
        if (err) {
            throw err;
        }
        console.log('회원 정보가 성공적으로 수정되었습니다.');
        res.redirect('/');
        });
};

exports.renderEditPage = function(req, res) {
    const userId = req.session.user_id
};

exports.editUserInfo = function(req, res){

    const { id, name, email} = req.body;

};
