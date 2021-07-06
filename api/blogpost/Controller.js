const {

    createBlogPostService, deleteBlogPostService,editBlogPostService, getBlogPostService,
  } = require("./services/createBlogPostServices");
  
  
  const { BaseController } = require("../");
  
  class BlogPostController extends BaseController {
    async createBlogPostController(req,res,next)
      {
          const{
          
            title,
            contentt,
            
          }=req.body;
        
          const coachId=res.locals.id;
           const fileData = req.files;
          const result =await createBlogPostService(
            coachId,
            title,
            contentt,
            fileData,
          );
          if (result.status) {
              const response = this.setStatusCode(result.status).sendErrorResponse(
              result.message
          );
              return next(response);
          }
          const response = this.setStatusCode(200).sendResponse(
              result.message,
              result.data
          );
          return res.json(response);
      }
      async deleteBlogPostController(req,res,next)
      {
          const{
              blogpostId,
          }=req.query;
          const result=await deleteBlogPostService(blogpostId);
          if (result.status) {
              const response = this.setStatusCode(result.status).sendErrorResponse(
              result.message
          );
              return next(response);
          }
          const response = this.setStatusCode(200).sendResponse(
              result.message,
              result.data
          );
          return res.json(response);
      }
  
      async editBlogPostController(req,res,next)
      {
          const { blogpostId } = req.query;
          const result=await editBlogPostService(blogpostId,req.body);
          if (result.status) {
              const response = this.setStatusCode(result.status).sendErrorResponse(
                result.message
              );
              return next(response);
            }
            const response = this.setStatusCode(200).sendResponse(
              result.message,
              result.data
            );
            return res.json(response);
      }
      async getBlogPostController(req,res,next)
    {
        const { blogpostId } = req.query;
        const result=await getBlogPostService(blogpostId);
        if (result.status) {
            const response = this.setStatusCode(result.status).sendErrorResponse(
              result.message
            );
            return next(response);
          }
          const response = this.setStatusCode(200).sendResponse(
            result.message,
            result.data
          );
          return res.json(response);
    }
   
  }
  
  module.exports = new BlogPostController();
  