
//const { DEFAULT_USER_IMAGE_URL } = require('../config/serverConfig');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('test', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  
   description: {
    type: Sequelize.STRING,
    allowNull:true,

   },
   hours:{
    type:Sequelize.INTEGER,
    allowNull:true,

   },

   evaluation:{
    type:Sequelize.INTEGER,
    allowNull:true,

   },

  }),
  down: (queryInterface) => queryInterface.dropTable('test'),
};
