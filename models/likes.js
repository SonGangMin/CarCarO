const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('likes', {
    number: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    car_num: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'cars',
        key: 'num'
      }
    }
  }, {
    sequelize,
    tableName: 'likes',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "number" },
        ]
      },
      {
        name: "likes_FK",
        using: "BTREE",
        fields: [
          { name: "car_num" },
        ]
      },
    ]
  });
};
