const { DataTypes } = require("sequelize");
const BaseModel = require("./baseModel");

module.exports = (sequelize) => {
  class User extends BaseModel {}

  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [5, 50],
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [5, 255],
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8, 255],
        },
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "user",
      defaultScope: {
        attributes: { exclude: ["password"] },
      },
      timestamps: false
    }
  );
  return User;
};
