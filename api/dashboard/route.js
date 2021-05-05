const router = require("express-promise-router")();
const DashboardController= require("./Controller");
//const { validator } = require("../../middelwares/validator");
const {isAuthorized} =require("../../middelwares/authorization")

/*const {
  createCourseSchema,
} = require("./schema");
*/
const dashboardRoute = {
  BaseRoute: "/dashboard",
  root: "/",
  getPersonality:"/get-personality",
  
};


router.get(
  dashboardRoute.getPersonality,
  isAuthorized,
  DashboardController.getPersonalityController.bind(DashboardController)
);

module.exports = {
  dashboardRouter: router,
  dashboardRoute,
};
