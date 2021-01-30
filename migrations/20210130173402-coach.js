const { DEFAULT_USER_IMAGE_URL } = require('../config/serverConfig');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('coach', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    experienceLevel:{
        type: Sequelize.INTEGER,
        allowNull:false,
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: DEFAULT_USER_IMAGE_URL,
    }, 
    isActiveAccount: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
    isMailVerified: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false,
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
  down: (queryInterface) => queryInterface.dropTable('coach'),
};