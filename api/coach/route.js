const router = require("express-promise-router")();
const CoachController = require("./Controller");
const { validator } = require("../../middelwares/validator");


const {
    createCoachSchema,
    loginCoachSchema
   
} = require("./schema");



const coachRoute = {
  BaseRoute: "/coaches",
  root: "/",
  createCoach: "/sign-up",
  loginCoach: "/login"
  
};



router.post(
    coachRoute.createCoach,
    validator(createCoachSchema),
    CoachController.createCoachController.bind(CoachController)
);

router.post(
coachRoute.loginCoach,
validator(loginCoachSchema),
CoachController.loginCoachController.bind(CoachController)

)

module.exports = {
    coachRouter: router,
    coachRoute,
  };