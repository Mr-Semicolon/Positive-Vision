//const { DEFAULT_USER_IMAGE_URL } = require("../config/serverConfig");

module.exports = function (sequelize, DataTypes) {
  const appointment = sequelize.define('Appointment', {
    
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
          
          date: {
            type: DataTypes.DATE,
            allowNull: true,
          },

          time: {
            type: DataTypes.TIME,
            allowNull: true,
          },

          hours: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
         
    },
    {
      tableName: "appointment",
    },
  );
  return appointment;
};
