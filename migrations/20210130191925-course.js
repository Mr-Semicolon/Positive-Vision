
//const { DEFAULT_USER_IMAGE_URL } = require('../config/serverConfig');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('course', {
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
   description: {
    type: Sequelize.STRING,
    allowNull:true,

   },
   hours:{
    type:Sequelize.INTEGER,
    allowNull:true,

   },

  }),
  down: (queryInterface) => queryInterface.dropTable('course'),
};
