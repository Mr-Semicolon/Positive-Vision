module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('userPersonality', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  
  personality: {
    type: Sequelize.STRING,
    allowNull:true,

   },
   email: {
    type: Sequelize.STRING,
    allowNull:true,

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
  down: (queryInterface) => queryInterface.dropTable('userPersonality'),
};
