//const { DEFAULT_USER_IMAGE_URL } = require("../config/serverConfig");

module.exports = function (sequelize, DataTypes) {
    const to_do_list = sequelize.define('To_do_list', {
      
          id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true,
            },
    
      },
      {
        tableName: "to_do_list",
      },
    );
    return to_do_list;
  };
  