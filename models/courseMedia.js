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
            
              courseId:{
                type:DataTypes.INTEGER,
                allowNull:false,
                references: {
                  model: 'course',
                  key: 'id',}


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
        tableName: "courseMedia",
      },

    );

    courseMedia.associate = (models) => {
      courseMedia.belongsTo(models.Course, {
        foreignKey: 'courseId',
  
      });

    };
    return courseMedia;
  };
  