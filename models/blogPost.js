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
       
          title: {
            type: DataTypes.STRING,
            allowNull: true,
            
          },
          contentt: {
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
        
  blogPost.hasMany(models.BlogPostMedia, {
    foreignKey: "blogPostId",
    as: "media",
  });
    
    }

    return blogPost;
  };
  