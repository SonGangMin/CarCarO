const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('carsHashtags', {
    carsId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cars',
        key: 'num'
      }
    },
    hashtagId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'hashtags',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'carsHashtags',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "carsId" },
          { name: "hashtagId" },
        ]
      },
      {
        name: "carsHashtags_FK_1",
        using: "BTREE",
        fields: [
          { name: "hashtagId" },
        ]
      },
    ]
  });
};
