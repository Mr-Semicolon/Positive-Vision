const {

 getPersonalityService
} = require("./services/dashboardService");


const { BaseController } = require("..");

class DashboardController extends BaseController {
 
    async getPersonalityController(req,res,next)
    {
        const { email } = res.locals;
        const result=await getPersonalityService(email);
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

module.exports = new DashboardController();
