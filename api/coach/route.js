const router = require("express-promise-router")();
const CoachController = require("./Controller");
const { validator } = require("../../middelwares/validator");


const {
    createCoachSchema,
    loginCoachSchema,
    confirmCoachEmailSchema
   
} = require("./schema");



const coachRoute = {
  BaseRoute: "/coaches",
  root: "/",
  createCoach: "/sign-up",
  loginCoach: "/login",
  confirmCoachEmail:"/coach-email-confirm",
 
};



router.post(
    coachRoute.createCoach,
    validator(createCoachSchema),
    CoachController.createCoachController.bind(CoachController)
);

router.post(
  coachRoute.confirmCoachEmail,
  validator(confirmCoachEmailSchema),
  CoachController.confirmCoachEmailController.bind(CoachController)
);

router.post(
coachRoute.loginCoach,
validator(loginCoachSchema),
CoachController.loginCoachController.bind(CoachController)

);

module.exports = {
    coachRouter: router,
    coachRoute,
  };