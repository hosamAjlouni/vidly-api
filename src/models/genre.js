const { DataTypes } = require("sequelize");
const BaseModel = require("./baseModel");

module.exports = (sequelize) => {
  class Genre extends BaseModel {
    static associate(models) {
      this.hasMany(models.movie);
    }
  }

  Genre.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [5, 255],
        },
      },
    },
    {
      sequelize,
      modelName: "genre",
    }
  );
  return Genre;
};
