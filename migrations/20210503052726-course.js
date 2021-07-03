
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('course', {
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
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    hours: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    category:{
      type:Sequelize.STRING,
      allowNull:false,
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
  down: (queryInterface) => queryInterface.dropTable('course'),
};
