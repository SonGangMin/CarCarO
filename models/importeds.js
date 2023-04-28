const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('importeds', {
    brand: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'importeds',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "brand" },
        ]
      },
    ]
  });
};
