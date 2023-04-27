var DataTypes = require("sequelize").DataTypes;
var _boards = require("./boards");
var _cars = require("./cars");
var _carsHashtag = require("./carsHashtag");
var _carsHashtags = require("./carsHashtags");
var _comments = require("./comments");
var _faqs = require("./faqs");
var _hashtags = require("./hashtags");
var _inquirys = require("./inquirys");
var _likes = require("./likes");
var _users = require("./users");

function initModels(sequelize) {
  var boards = _boards(sequelize, DataTypes);
  var cars = _cars(sequelize, DataTypes);
  var carsHashtag = _carsHashtag(sequelize, DataTypes);
  var carsHashtags = _carsHashtags(sequelize, DataTypes);
  var comments = _comments(sequelize, DataTypes);
  var faqs = _faqs(sequelize, DataTypes);
  var hashtags = _hashtags(sequelize, DataTypes);
  var inquirys = _inquirys(sequelize, DataTypes);
  var likes = _likes(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  cars.belongsToMany(hashtags, { as: 'hashtagsId_hashtags', through: carsHashtag, foreignKey: "carsId", otherKey: "hashtagsId" });
  cars.belongsToMany(hashtags, { as: 'hashtagId_hashtags', through: carsHashtags, foreignKey: "carsId", otherKey: "hashtagId" });
  hashtags.belongsToMany(cars, { as: 'carsId_cars', through: carsHashtag, foreignKey: "hashtagsId", otherKey: "carsId" });
  hashtags.belongsToMany(cars, { as: 'carsId_cars_carsHashtags', through: carsHashtags, foreignKey: "hashtagId", otherKey: "carsId" });
  carsHashtag.belongsTo(cars, { as: "car", foreignKey: "carsId"});
  cars.hasMany(carsHashtag, { as: "carsHashtags", foreignKey: "carsId"});
  carsHashtags.belongsTo(cars, { as: "car", foreignKey: "carsId"});
  cars.hasMany(carsHashtags, { as: "cars_carsHashtags", foreignKey: "carsId"});
  carsHashtag.belongsTo(hashtags, { as: "hashtag", foreignKey: "hashtagsId"});
  hashtags.hasMany(carsHashtag, { as: "carsHashtags", foreignKey: "hashtagsId"});
  carsHashtags.belongsTo(hashtags, { as: "hashtag", foreignKey: "hashtagId"});
  hashtags.hasMany(carsHashtags, { as: "hashtag_carsHashtags", foreignKey: "hashtagId"});
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
    carsHashtag,
    carsHashtags,
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
