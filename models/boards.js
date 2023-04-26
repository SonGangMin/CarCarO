const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('boards', {
    postId: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    grade: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "1"
    }
  }, {
    sequelize,
    tableName: 'boards',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "postId" },
        ]
      },
      {
        name: "boards_FK",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
