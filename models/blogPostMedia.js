//const { DEFAULT_USER_IMAGE_URL } = require("../config/serverConfig");

module.exports = function (sequelize, DataTypes) {
    const blogPostMedia = sequelize.define('BlogPostMedia', {
      
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
              blogPostId:{
                type:DataTypes.INTEGER,
                allowNull:false,
                references: {
                  model: 'blogPost',
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
        tableName: "blogPostMedia",
      },

    );

    blogPostMedia.associate = (models) => {
      blogPostMedia.belongsTo(models.BlogPost, {
        foreignKey: 'blogPostId',
  
      });

    };
    return blogPostMedia;
  };
  