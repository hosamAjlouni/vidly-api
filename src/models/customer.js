const { DataTypes } = require("sequelize");
const BaseModel = require("./baseModel");

module.exports = (sequelize) => {
  class Customer extends BaseModel {
    static associate(models) {
      this.hasMany(models.rental);
    }
  }

  Customer.init(
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          len: [1, 255],
        },
      },
      isGold: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      phone: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          len: [10, 14],
        },
      },
    },
    {
      sequelize,
      modelName: "customer",
    }
  );
  return Customer;
};
