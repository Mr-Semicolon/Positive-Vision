//const { DEFAULT_USER_IMAGE_URL } = require("../config/serverConfig");

module.exports = function (sequelize, DataTypes) {
    const event_list = sequelize.define('Event_list', {
      
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        
         name: {
          type:DataTypes.STRING,
          allowNull:true,
      
         },
        
      
         description:{
          type:DataTypes.STRING,
          allowNull:true,
      
         },
      
         isDone:{
          type:DataTypes.BOOLEAN,
          allowNull:true,
         },
      
            
          
           
      },
      {
        tableName: "event_list",
      },
    );
    return event_list;
  };
  