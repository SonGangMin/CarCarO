const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('carsHashtag', {
    carsId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cars',
        key: 'num'
      }
    },
    hashtagsId: {
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
    tableName: 'carsHashtag',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "carsId" },
          { name: "hashtagsId" },
        ]
      },
      {
        name: "carsHashtag_FK_1",
        using: "BTREE",
        fields: [
          { name: "hashtagsId" },
        ]
      },
    ]
  });
};
