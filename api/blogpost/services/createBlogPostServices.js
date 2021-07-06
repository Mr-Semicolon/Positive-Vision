const {
    BlogPost,
    BlogPostMedia
  } = require("../../../models");

  const {
    FILE_TYPES_IMAGE,
    IMAGE_FILE_SIZE,
    VIDEO_FILE_SIZE,
    FILE_TYPES_VIDEO,
  } = require("../../../config/serverConfig");
  const {
    uploadToS3,
    deleteFromS3,
    getFileKeyFromS3Location, }=require("../../shared/util");

    async function createBlogPostService(
      coachId,
      title,
      content,
      fileData,
      
      
      )
    {
      let resultData = {};
      let theBlogPost=await BlogPost.create({
        coachId,
        title,
        content,
       
      });
      resultData["blogpost"] = theBlogPost;

      ////////////////////////////meidaaaaaaaaaa

      if (fileData) {
        const filesFromAws = await Promise.all(
          await fileData.map(async (file) => {
            const [, fileExt] = file.mimetype.split("/");
            const imageTypes = FILE_TYPES_IMAGE.split("#");
            const videoTypes = FILE_TYPES_VIDEO;
    
            let mediaType = "file";
            if (imageTypes.includes(`.${fileExt}`)) {
              mediaType = "image";
            } else if (videoTypes.includes(`.${fileExt}`)) {
              mediaType = "video";
            } else {
              return {
                message: `The file Extention .${fileExt} is not accepted`,
                status: 400,
              };
            }
            if (mediaType === "image" && file.size > IMAGE_FILE_SIZE) {
              return {
                message: `${fileExt} files should be less than ${IMAGE_FILE_SIZE} bytes`,
                status: 400,
              };
            } else if (mediaType === "video" && file.size > VIDEO_FILE_SIZE) {
              return {
                message: `${fileExt} files should be less than ${VIDEO_FILE_SIZE} bytes`,
                status: 400,
              };
            }
            const blogPostMedia = await uploadToS3(file.buffer, fileExt);
            if (blogPostMedia.message) {
              return {
                message: blogPostMedia.message,
                status: 400,
              };
            }
            return await BlogPostMedia.create({
             
              media: blogPostMedia, 
              blogPostId: theBlogPost.id,
            });
          })
        );
        const errorFile = await filesFromAws.find((file) => file.message);
        console.log(errorFile);
        if (errorFile != undefined) {
          theBlogPost.destroy();
          console.log(theBlogPost);
          return {
            message: `test:files should be less than ${VIDEO_FILE_SIZE} bytes`,
            status: 400,
          };
        }
        resultData["blogpost-media"] = filesFromAws;
      }

      /////////////mediaaaaaaa
      return{
          message: "The blogpost has been created successfully",
          data: resultData,
      };
   }

   async function deleteBlogPostService(blogpostId){
       let checkId=await BlogPost.findOne({where:{id:blogpostId}})
       if(!checkId){
           return{
               message:"The blogpost not exist",
               status: 404,
           };
       }
       await checkId.destroy();
       return{
        message: "The blogpost has been deleted successfully",
    };
   }

   async function editBlogPostService(blogpostId,reqBody)
   {
    let resultData = {};
    const returnedResult = await BlogPost.findOne({
      where: {
        id: blogpostId,
      },
    });
    if (!returnedResult) {
      return { message: "this blogpost not found", status: 400 };
    }
    returnedResult.update(reqBody);
    resultData["UpdatedBlogPost"] = returnedResult;
  
    return {
      message: `blogPost update has been stablished successfully`,
      data: resultData,
    };

   }

   async function getBlogPostService(blogpostId)
   {
    let resultData = {};
    const returnedResult = await BlogPost.findOne({
      where: {
        id: blogpostId,
      },
    });
    if (!returnedResult) {
        return { message: "this blogPost not found", status: 400 };
      }
      
      resultData["gettingBlogPost"] = returnedResult;
    return{
        //message:"The Course has been updated successfully",
        data: resultData,
    };
   }
  module.exports = {
      createBlogPostService,
      deleteBlogPostService,
      editBlogPostService,
      getBlogPostService,
      
      /* getAllBlogpost,
      getAllBlogpostByRating, // rate .. ta3del fe el model w el migration
      searchOnBlogpost,*/
  };