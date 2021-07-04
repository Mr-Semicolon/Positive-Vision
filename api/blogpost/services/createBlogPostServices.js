const {
    BlogPost
  } = require("../../../models");


    async function createBlogPostService(
      coachId,
      image,
      title,
      content,
      
      
      )
    {
      let theBlogPost=await BlogPost.create({
        coachId,
        image,
        title,
        content,
       
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