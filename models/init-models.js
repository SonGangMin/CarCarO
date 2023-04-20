var DataTypes = require("sequelize").DataTypes;
var _boards = require("./boards");
var _cars = require("./cars");
var _comments = require("./comments");
var _faqs = require("./faqs");
var _hashtag = require("./hashtag");
var _inquiry = require("./inquiry");
var _likes = require("./likes");
var _users = require("./users");

function initModels(sequelize) {
  var boards = _boards(sequelize, DataTypes);
  var cars = _cars(sequelize, DataTypes);
  var comments = _comments(sequelize, DataTypes);
  var faqs = _faqs(sequelize, DataTypes);
  var hashtag = _hashtag(sequelize, DataTypes);
  var inquiry = _inquiry(sequelize, DataTypes);
  var likes = _likes(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  likes.belongsTo(cars, { as: "car_num_car", foreignKey: "car_num"});
  cars.hasMany(likes, { as: "likes", foreignKey: "car_num"});
  boards.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(boards, { as: "boards", foreignKey: "user_id"});
  comments.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(comments, { as: "comments", foreignKey: "user_id"});
  inquiry.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(inquiry, { as: "inquiries", foreignKey: "user_id"});
  likes.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(likes, { as: "likes", foreignKey: "user_id"});

  return {
    boards,
    cars,
    comments,
    faqs,
    hashtag,
    inquiry,
    likes,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
