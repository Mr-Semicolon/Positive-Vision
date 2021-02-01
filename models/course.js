//const { DEFAULT_USER_IMAGE_URL } = require("../config/serverConfig");

module.exports = function (sequelize, DataTypes) {
  const course = sequelize.define('Course', {
    
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          
         description: {
            type: DataTypes.STRING,
            allowNull:true,
        
           },
        hours:{
            type:DataTypes.INTEGER,
            allowNull:true,
        
           },
          
    },
    {
      tableName: "course",
    },
  );
  return course;
};
