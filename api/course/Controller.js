const {

  createCourseService,
} = require("./services/CourseService");


const { BaseController } = require("../");

class CourseController extends BaseController {
  async createCourseController(req, res, next) {
    const {
      name,
      description,
      hours,
    } = req.body;

    const result = await createCourseService(
      name,
      description,
      hours,
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

 
}

module.exports = new CourseController();
