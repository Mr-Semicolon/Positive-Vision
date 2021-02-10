
const { DEFAULT_USER_IMAGE_URL } = require('../config/serverConfig');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('blogPost', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
    image: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: DEFAULT_USER_IMAGE_URL,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: true,
      
    },
    content: {
      type: Sequelize.STRING,
      allowNull: true,
     
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
  down: (queryInterface) => queryInterface.dropTable('blogPost'),
};
