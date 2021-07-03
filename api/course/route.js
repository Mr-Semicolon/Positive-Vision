const router = require("express-promise-router")();
const CourseController = require("./Controller");
const { validator } = require("../../middelwares/validator");
const {isAuthorized} =require("../../middelwares/authorization");
const {
  createCourseSchema,
  deleteCourseSchema,
  editCourseSchema,
  getCourseSchema,
 
} = require("./schema");

const courseRoute = {
  BaseRoute: "/courses",
  root: "/",
  createCourse: "/add-course",
  deleteCourse: "/delete-course",
  editCourse:"/edit-course",
  getCourse:"/get-course",
  
};

router.post(
  courseRoute.createCourse,
  validator(createCourseSchema),
  isAuthorized,
  CourseController.createCourseController.bind(CourseController)
);

router.delete(
  courseRoute.deleteCourse,
  validator(deleteCourseSchema),
  isAuthorized,
  CourseController.deleteCourseController.bind(CourseController)
);

router.put(
  courseRoute.editCourse,
  validator(editCourseSchema),
  isAuthorized,
  CourseController.editCourseController.bind(CourseController)
);

router.get(
  courseRoute.getCourse,
  validator(getCourseSchema),
  isAuthorized,
  CourseController.getCourseController.bind(CourseController)
);

module.exports = {
  courseRouter: router,
  courseRoute,
};
