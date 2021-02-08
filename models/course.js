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

      coachId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'coach',
          key: 'id',
        }

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
      tableName: "course",
    },
  );
 

  course.associate = (models) => {
    course.belongsTo(models.Coach, {
      foreignKey: 'coachId',

    });




  course.hasMany(models.CourseMedia, {
    foreignKey: "courseId",
    as: "R_media_course",
  });

  }
  return course;
};
