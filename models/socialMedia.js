//const { DEFAULT_USER_IMAGE_URL } = require("../config/serverConfig");

module.exports = function (sequelize, DataTypes) {
    const socialMedia = sequelize.define('SocialMedia', {
      
          id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true,
            },
            social_account: {
                type: DataTypes.STRING,
                allowNull:true,
            
            },
               
            type:{
            type:DataTypes.STRING,
            allowNull:true,
            
            },
          
           
      },
      {
        tableName: "socialMedia",
      },
    );
    return socialMedia;
  };
  