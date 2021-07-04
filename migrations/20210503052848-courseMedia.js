
//const { DEFAULT_USER_IMAGE_URL } = require('../config/serverConfig');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('courseMedia', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  
   media: {
    type: Sequelize.STRING,
    allowNull:true,

   },
  

   description:{
    type:Sequelize.STRING,
    allowNull:true,

   },



   courseId:{
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: {
        tableName: 'course',
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
  down: (queryInterface) => queryInterface.dropTable('courseMedia'),
};
