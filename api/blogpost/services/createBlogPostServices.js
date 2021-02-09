const {
    BlogPost
  } = require("../../../models");


    async function createBlogPostService(
      
      image,
      title,
      content,
      coachId,
      
      )
    {
      let theBlogPost=await BlogPost.create({
        image,
        title,
        content,
        coachId,
      });

      return{
          message: "The blogpost has been created successfully",
          data: theBlogPost,
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
  module.exports = {
      createBlogPostService,
      deleteBlogPostService,
      editBlogPostService,
  };