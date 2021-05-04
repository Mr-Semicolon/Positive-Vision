//const { DEFAULT_USER_IMAGE_URL } = require("../config/serverConfig");

module.exports = function (sequelize, DataTypes) {
    const userPersonality = sequelize.define('UserPersonality', {
      
          id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true,
            },
            personality: {
              type: DataTypes.STRING,
              allowNull: true,
            },
            
           
            email: {
                type: DataTypes.STRING,
                allowNull: true,
              },
              createdAt: {
                type: DataTypes.DATE,
                allowNull: true,
              },
              updatedAt: {
                type: DataTypes.DATE,
                allowNull: true,
              },
  
            },
           
    
      {
        tableName: "userPersonality",
      },
    );
  
   
  
    
  
  
    return userPersonality;
  };
  