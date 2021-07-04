
//const { DEFAULT_USER_IMAGE_URL } = require('../config/serverConfig');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('event_list', {
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
  

   description:{
    type:Sequelize.STRING,
    allowNull:true,

   },

   isDone:{
    type:Sequelize.BOOLEAN,
    allowNull:true,
   },


   userId:{
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: {
        tableName: 'user',
      },
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
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
  down: (queryInterface) => queryInterface.dropTable('event_list'),
};
