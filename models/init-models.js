var DataTypes = require("sequelize").DataTypes;
var _boards = require("./boards");
var _cars = require("./cars");
var _carshashtags = require("./carshashtags");
var _comments = require("./comments");
var _faqs = require("./faqs");
var _hashtags = require("./hashtags");
var _inquirys = require("./inquirys");
var _likes = require("./likes");
var _users = require("./users");

function initModels(sequelize) {
  var boards = _boards(sequelize, DataTypes);
  var cars = _cars(sequelize, DataTypes);
  var carshashtags = _carshashtags(sequelize, DataTypes);
  var comments = _comments(sequelize, DataTypes);
  var faqs = _faqs(sequelize, DataTypes);
  var hashtags = _hashtags(sequelize, DataTypes);
  var inquirys = _inquirys(sequelize, DataTypes);
  var likes = _likes(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  cars.belongsToMany(hashtags, { as: 'hashtagId_hashtags', through: carshashtags, foreignKey: "carsId", otherKey: "hashtagId" });
  hashtags.belongsToMany(cars, { as: 'carsId_cars', through: carshashtags, foreignKey: "hashtagId", otherKey: "carsId" });
  comments.belongsTo(boards, { as: "post", foreignKey: "post_id"});
  boards.hasMany(comments, { as: "comments", foreignKey: "post_id"});
  carshashtags.belongsTo(cars, { as: "car", foreignKey: "carsId"});
  cars.hasMany(carshashtags, { as: "carshashtags", foreignKey: "carsId"});
  hashtags.belongsTo(cars, { as: "cars_num_car", foreignKey: "cars_num"});
  cars.hasMany(hashtags, { as: "hashtags", foreignKey: "cars_num"});
  likes.belongsTo(cars, { as: "car_num_car", foreignKey: "car_num"});
  cars.hasMany(likes, { as: "likes", foreignKey: "car_num"});
  carshashtags.belongsTo(hashtags, { as: "hashtag", foreignKey: "hashtagId"});
  hashtags.hasMany(carshashtags, { as: "carshashtags", foreignKey: "hashtagId"});
  boards.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(boards, { as: "boards", foreignKey: "user_id"});
  cars.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(cars, { as: "cars", foreignKey: "user_id"});
  comments.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(comments, { as: "comments", foreignKey: "user_id"});
  inquirys.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(inquirys, { as: "inquiries", foreignKey: "user_id"});
  likes.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(likes, { as: "likes", foreignKey: "user_id"});

  return {
    boards,
    cars,
    carshashtags,
    comments,
    faqs,
    hashtags,
    inquirys,
    likes,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
