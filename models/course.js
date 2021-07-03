module.exports = function (sequelize, DataTypes) {
  const course = sequelize.define('Course', {
      id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        coachId:{
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'coach',
            key: 'id',
          },
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      hours: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category:{
        type:DataTypes.STRING,
        allowNull:false,
      },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },{
        tableName: 'course',
      },
  );
 

  course.associate = (models) => {
    course.belongsTo(models.Coach, {
      foreignKey: 'coachId',

    });

  course.hasMany(models.CourseMedia, {
    foreignKey: "courseId",
    as: "media",
  });

  }
  return course;
};
