
const { DEFAULT_USER_IMAGE_URL } = require('../config/serverConfig');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('user', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    BOD: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    gender: {
      type: Sequelize.ENUM('Male', 'Female'),
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    socialMedia: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: DEFAULT_USER_IMAGE_URL,
    },
    facebookOrTwitter: {
      type: Sequelize.ENUM('Twitter', 'Facebook'),
      allowNull: true,
      defaultValue: 'Facebook',
    },
    isMailVerified: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    isActiveAccount: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('user'),
};