const router = require("express-promise-router")();
const CourseController = require("./Controller");
const { validator } = require("../../middelwares/validator");

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

router.get(
  courseRoute.getCourse,
  validator(getCourseSchema),
  CourseController.getCourseController.bind(CourseController)
);

module.exports = {
  courseRouter: router,
  courseRoute,
};
