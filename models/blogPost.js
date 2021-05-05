const { DEFAULT_USER_IMAGE_URL } = require("../config/serverConfig");

module.exports = function (sequelize, DataTypes) {
    const blogPost = sequelize.define('BlogPost', {
      
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
          image: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: DEFAULT_USER_IMAGE_URL,
          },
          title: {
            type: DataTypes.STRING,
            allowNull: true,
            
          },
          content: {
            type: DataTypes.STRING,
            allowNull: true,
           
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
        tableName: "blogPost",
      },
    );
      
    blogPost.associate = (models) => {
        blogPost.belongsTo(models.Coach, {
          foreignKey: 'coachId',
    
        });
    
    }

    return blogPost;
  };
  