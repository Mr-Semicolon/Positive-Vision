const router = require("express-promise-router")();
const CoachController = require("./Controller");
const { validator } = require("../../middelwares/validator");


const {
    createCoachSchema,
   
} = require("./schema");



const coachRoute = {
  BaseRoute: "/coaches",
  root: "/",
  createCoach: "/sign-up",
  
};

router.post(
    coachRoute.createCoach,
    validator(createCoachSchema),
    CoachController.createCoachController.bind(CoachController)
);

module.exports = {
    coachRouter: router,
    coachRoute,
  };