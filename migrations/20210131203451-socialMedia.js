
//const { DEFAULT_USER_IMAGE_URL } = require('../config/serverConfig');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('socialMedia', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  
   social_account: {
    type: Sequelize.STRING,
    allowNull:true,

   },
   
   type:{
    type:Sequelize.STRING,
    allowNull:true,

   },

  }),
  down: (queryInterface) => queryInterface.dropTable('socialMedia'),
};
