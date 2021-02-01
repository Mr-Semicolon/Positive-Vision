//const { DEFAULT_USER_IMAGE_URL } = require("../config/serverConfig");

module.exports = function (sequelize, DataTypes) {
    const to_do_list = sequelize.define('To_do_list', {
      
          id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true,
            },

            userId:{
              type:DataTypes.INTEGER,
              allowNull:false,
              references: {
                model: 'to_do_list',
                key: 'id',
              }
  
            },
    
      },
      {
        tableName: "to_do_list",
      },
    );

    to_do_list.associate = (models) => {
      to_do_list.belongsTo(models.User, {
        foreignKey: 'userId',
  
      });
    


    to_do_list.hasMany(models.Event_list, {
      foreignKey: "listId",
      as: "R_Eventlist_list",
    });
  };
    return to_do_list;
  };
  