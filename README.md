# CarCarO
CarCarO 프로젝트 (개인간 중고차거래사이트)

영남인재교육원 CarCarO팀 1차프로젝트




-실행방법
clone 후 /dump/CarCarO_최종_0512.sql 덤프파일 DB로 실행 후 orm.js 실행합니다
 /models/init-models.js 파일의 users.hasMany(cars, { foreignKey: "user_id" }); 이부분을 보이는것처럼 as를 지워줍니다.
 프로젝트폴더 제일 상단에 config디렉토리를 만들고 config.json파일을 만듭니다.
 
 
 // orm.js 예시
 const SequelizeAuto = require("sequelize-auto");
const auto = new SequelizeAuto("CarCarO", "root", "edurootroot", {
host: "127.0.0.1", // DB Host 주소
port: "3306", // 포트 번호
dialect: "mysql", // 사용하는 DBMS 종류
});

auto.run();


//config.json 예시
{
"development": {
"username": "root",
"password": "edurootroot",
"database": "CarCarO",
"host": "127.0.0.1",
"dialect": "mysql"
},
"test": {
"username": "root",
"password": "edurootroot",
"database": "CarCarO",
"host": "127.0.0.1",
"dialect": "mysql"
},
"production": {
"username": "root",
"password": "edurootroot",
"database": "CarCarO",
"host": "127.0.0.1",
"dialect": "mysql"
}
}
