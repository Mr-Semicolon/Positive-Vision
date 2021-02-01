
//const { DEFAULT_USER_IMAGE_URL } = require('../config/serverConfig');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('appointment', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  
   name: {
    type: Sequelize.STRING,
    allowNull:true,

   },
   date:{
    type:Sequelize.DATE,
    allowNull:true,

   },

   time:{
    type:Sequelize.TIME,
    allowNull:true,

   },
   hours:{
    type:Sequelize.INTEGER,
    allowNull:true,

   },

  }),
  down: (queryInterface) => queryInterface.dropTable('appointment'),
};
