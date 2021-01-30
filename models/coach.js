const { DEFAULT_USER_IMAGE_URL } = require("../config/serverConfig");

module.exports = function (sequelize, DataTypes) {
  const coach = sequelize.define(
    "Coach",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        experienceLevel:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
          type:  DataTypes.STRING,
          allowNull: true,
          defaultValue: DEFAULT_USER_IMAGE_URL,
        }, 
        isActiveAccount: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: true,
        },
        isMailVerified: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },
    },
    {
      tableName: "coach",
    }
  );
  return coach;
};