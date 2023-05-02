const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    no: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: "users_UN"
    },
    id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tel: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    birth: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    provider: {
      type: DataTypes.ENUM('local','kakao'),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "users_UN",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "no" },
        ]
      },
      {
        name: "users2_UN",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
          { name: "tel" },
        ]
      },
    ]
  });
};
