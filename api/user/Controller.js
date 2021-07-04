const {
  createUserService,
  confirmEmailService,
  loginUserService,
  chooseCoach,
  getAllCoaches,
  addAppoin,
  deleteAppoin,
  getAllAppoin,
} = require("./services/createUserService");


const { BaseController } = require("../");

class UserController extends BaseController {
  async createUserController(req, res, next) {
    const {
      name,
      password,
      BOD,
      gender,
      email,
      address,
      socialMedia,
      image,
      facebookOrTwitter,
    } = req.body;

    const result = await createUserService(
      name,
      password,
      BOD,
      gender,
      email,
      address,
      socialMedia,
      image,
      facebookOrTwitter,
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



  async loginUserController(req, res, next) {
    const {
     email,
     password
    } = req.body;

    const result = await loginUserService(
      email,
      password,
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

  async confirmEmailController(req, res, next) {
    const {
     email,
     theString
    } = req.body;

    const result = await confirmEmailService(
      email,
      theString,
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


  async chooseCoachController(req, res, next) {
    const {
    coachId
    } = req.body;
    const userId = res.locals.id;

    const result = await chooseCoach(userId,
    coachId
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

  

  async getAllCoachesController(req, res, next) {
   
    const result = await getAllCoaches();
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

  async addAppoinController(req, res, next) {
   
    const {
      name,date,time,hours,
      } = req.body;
      const userId = res.locals.id;

    const result = await addAppoin(name,date,time,hours,userId);
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

  async deleteAppoinController(req, res, next) {
   
    const {
      appoiId
      } = req.query;
    

    const result = await deleteAppoin(appoiId);
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


  async getAllAppoinController(req, res, next) {
   
    const userId = res.locals.id
    

    const result = await getAllAppoin(userId);
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

module.exports = new UserController();
