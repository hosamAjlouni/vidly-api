const { DataTypes } = require("sequelize");
const BaseModel = require("./baseModel");

module.exports = (sequelize) => {
  class Movie extends BaseModel {
    static associate(models) {
      this.belongsTo(models.genre, {
        allowNull: false,
        include: true
      });
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
      numberInStock: {
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
      defaultScope: {
        include: "genre"
      },
      timestamps: false
    }
  );

  return Movie;
};
