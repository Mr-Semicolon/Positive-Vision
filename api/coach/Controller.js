const {
    createCoachService,
} = require("./services/createCoachService");

const { BaseController } = require("../");

class CoachController extends BaseController {
    async createCoachController(req,res,next)
    {
        const{
            name,
            password,
            email,
            description,
            experienceLevel,
            phoneNumber,
            image,

        }=req.body;

        const result =await createCoachService(
            name,
            password,
            email,
            description,
            experienceLevel,
            phoneNumber,
            image,

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
    module.exports = new CoachController();