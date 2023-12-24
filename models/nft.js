"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Nft extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Nft.belongsTo(models.Channel, {
        foreignKey: "channelId",
        as: "channel",
      });
      Nft.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "category",
      });
    }
  }
  Nft.init(
    {
      channelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Channels",
          key: "id",
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      price: DataTypes.FLOAT,
      isSold: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Nft",
    }
  );
  return Nft;
};
