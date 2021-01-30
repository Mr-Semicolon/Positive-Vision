const { DEFAULT_USER_IMAGE_URL } = require("../config/serverConfig");

module.exports = function (sequelize, DataTypes) {
  const choach = sequelize.define(
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
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description:{
            type: DataTypes.STRING,
            allowNull: true,
    
        },
        experienceLevel:{
            typ: DataTypes.INTEGER,
            allowNull:false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        image: {
          type:  DataTypes.STRING,
          allowNull: true,
          defaultValue: DEFAULT_USER_IMAGE_URL,
        }, 
        isMailVerified: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
          },
          isActiveAccount: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true,
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