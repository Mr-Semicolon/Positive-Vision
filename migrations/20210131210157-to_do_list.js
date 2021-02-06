
//const { DEFAULT_USER_IMAGE_URL } = require('../config/serverConfig');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('to_do_list', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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

  }),
  down: (queryInterface) => queryInterface.dropTable('to_do_list'),
};
