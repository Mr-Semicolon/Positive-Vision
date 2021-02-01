const router = require("express-promise-router")();
const CourseController = require("./Controller");
const { validator } = require("../../middelwares/validator");

const {
  createCourseSchema,
 
} = require("./schema");

const courseRoute = {
  BaseRoute: "/courses",
  root: "/",
  createCourse: "/add-course",
  
};

router.post(
  courseRoute.createcourse,
  validator(createCourseSchema),
  CourseController.createCourseController.bind(CourseController)
);


module.exports = {
  courseRouter: router,
  courseRoute,
};
