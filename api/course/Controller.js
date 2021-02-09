const {

  createCourseService, deleteCourseService,editCourseService,
} = require("./services/CourseService");


const { BaseController } = require("../");

class CourseController extends BaseController {
  async createCourseController(req,res,next)
    {
        const{
            name,
            description,
            hours,
            coachId,
        }=req.body;
        //const coachId=res.locals;

        const result =await createCourseService(
            name,
            description,
            hours,
            coachId,
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
    async deleteCourseController(req,res,next)
    {
        const{
            courseId,
        }=req.query;
        const result=await deleteCourseService(courseId);
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

    async editCourseController(req,res,next)
    {
        const { courseId } = req.query;
        const result=await editCourseService(courseId,req.body);
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

module.exports = new CourseController();
