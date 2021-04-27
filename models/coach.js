const { DEFAULT_USER_IMAGE_URL } = require("../config/serverConfig");

module.exports = function (sequelize, DataTypes) {
  const coach = sequelize.define(
    "Coach",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        experienceLevel:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
          type:  DataTypes.STRING,
          allowNull: true,
          defaultValue: DEFAULT_USER_IMAGE_URL,
        }, 
        isActiveAccount: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: true,
        },
        isMailVerified: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        uniqueString:{
          type: DataTypes.STRING,
          allowNull: true,
        },
        accountType:{
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: 'coach',
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
      tableName: "coach",
    }
  );
 
  coach.associate = (models) => {
  coach.hasMany(models.Course, {
    foreignKey: "coachId",
    as: "course",
  });

  coach.hasMany(models.Appointment, {
    foreignKey: "coachId",
    as: "appointment",
  });

  coach.hasMany(models.User, {
    foreignKey: "coachId",
    as: "user",
  });

  coach.hasMany(models.BlogPost, {
    foreignKey: "coachId",
    as: "blogPost",
  });
  }
  return coach;
};