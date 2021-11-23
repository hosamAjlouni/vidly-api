const { DataTypes } = require("sequelize");
const BaseModel = require("./baseModel");

module.exports = (sequelize) => {
  class Movie extends BaseModel {
    static associate(models) {
      this.belongsTo(models.genre);
      this.hasMany(models.rental);
    }
  }
  Movie.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
        unique: true,
        validate: {
          len: [0, 255],
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [0, 255],
        },
      },
      dailyRentalRate: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [0, 255],
        },
      },
    },
    {
      sequelize,
      modelName: "movie",
    }
  );

  return Movie;
};
