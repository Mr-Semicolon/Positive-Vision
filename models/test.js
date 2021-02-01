//const { DEFAULT_USER_IMAGE_URL } = require("../config/serverConfig");

module.exports = function (sequelize, DataTypes) {
  const test = sequelize.define('Test', {
    
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          description: {
            type: DataTypes.STRING,
            allowNull:true,
        
           },
           hours:{
            type:DataTypes.INTEGER,
            allowNull:true,
        
           },
        
           evaluation:{
            type:DataTypes.INTEGER,
            allowNull:true,
        
           },
   
    },
    {
      tableName: "test",
    },
  );
  return test;
};
