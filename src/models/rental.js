const { DataTypes } = require("sequelize");
const BaseModel = require("./baseModel");

module.exports = (sequelize) => {
  class Rental extends BaseModel {
    static associate(models) {
      this.belongsTo(models.customer);
      this.belongsTo(models.movie);
    }
  }

  Rental.init(
    {
      dateOut: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: new Date(),
      },
      dateReturned: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: null
      },
    },
    {
      sequelize,
      modelName: "rental",
    }
  );
  return Rental;
};
