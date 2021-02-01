//const { DEFAULT_USER_IMAGE_URL } = require("../config/serverConfig");

module.exports = function (sequelize, DataTypes) {
    const courseMedia = sequelize.define('CourseMedia', {
      
          id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true,
            },
            media: {
              type: DataTypes.STRING,
              allowNull: true,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true,
              },
            
          
           
      },
      {
        tableName: "courseMedia",
      },
    );
    return courseMedia;
  };
  