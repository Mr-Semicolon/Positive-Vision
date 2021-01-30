const { DEFAULT_USER_IMAGE_URL } = require("../config/serverConfig");

module.exports = function (sequelize, DataTypes) {
  const user = sequelize.define('User', {
    
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
          BOD: {
            type: DataTypes.DATE,
            allowNull: true,
          },
          gender: {
            type: DataTypes.ENUM('Male', 'Female'),
            allowNull: true,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
          address: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          socialMedia: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          image: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: DEFAULT_USER_IMAGE_URL,
          },
          facebookOrTwitter: {
            type: DataTypes.ENUM('Twitter', 'Facebook'),
            allowNull: true,
            defaultValue: 'Facebook',
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
      tableName: "user",
    },
  );
  return user;
};
