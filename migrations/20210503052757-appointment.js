
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
    type:Sequelize.STRING,
    allowNull:true,

   },

   time:{
    type:Sequelize.STRING,
    allowNull:true,

   },
   hours:{
    type:Sequelize.STRING,
    allowNull:true,

   },

   isConfirm:{
    type:Sequelize.BOOLEAN,
    allowNull:true,
   },

   coachId:{
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: {
        tableName: 'coach',
      },
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
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
  down: (queryInterface) => queryInterface.dropTable('appointment'),
};
