const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cars', {
    carNum: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "cars_UN"
    },
    from: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    brand: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    model: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mile: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    year: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fuel: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    trans: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    hashtag: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    num: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    likes_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'cars',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "num" },
        ]
      },
      {
        name: "cars_UN",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "carNum" },
        ]
      },
      {
        name: "cars_FK",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
