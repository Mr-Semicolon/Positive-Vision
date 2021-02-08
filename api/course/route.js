const router = require("express-promise-router")();
const CourseController = require("./Controller");
const { validator } = require("../../middelwares/validator");

const {
  createCourseSchema,
  deleteCourseSchema,
  editCourseSchema,
 
} = require("./schema");

const courseRoute = {
  BaseRoute: "/courses",
  root: "/",
  createCourse: "/add-course",
  deleteCourse: "/delete-course",
  editCourse:"/edit-course",
  
};

router.post(
  courseRoute.createCourse,
  validator(createCourseSchema),
  CourseController.createCourseController.bind(CourseController)
);

router.delete(
  courseRoute.deleteCourse,
  validator(deleteCourseSchema),
  CourseController.deleteCourseController.bind(CourseController)
);

router.put(
  courseRoute.editCourse,
  validator(editCourseSchema),
  CourseController.editCourseController.bind(CourseController)
);

module.exports = {
  courseRouter: router,
  courseRoute,
};
