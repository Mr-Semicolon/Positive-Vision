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
            type: DataTypes.STRING,
            allowNull: true,
          },

          time: {
            type: DataTypes.STRING,
            allowNull: true,
          },

          hours: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          isConfirm:{
            type:DataTypes.BOOLEAN,
            allowNull:true,
           },

          coachId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references: {
              model: 'coach',
              key: 'id',}


          },

          userId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references: {
              model: 'user',
              key: 'id',
            }

          },
         
    },
    {
      tableName: "appointment",
    },
  );

 


  appointment.associate = (models) => {
    appointment.belongsTo(models.Coach, {
      foreignKey: 'coachId',

    });

    appointment.associate = (models) => {
      appointment.belongsTo(models.User, {
        foreignKey: 'userId',
  
      });

    };
  

  };
  


  return appointment;
};
