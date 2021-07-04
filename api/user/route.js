const router = require("express-promise-router")();
const UserController = require("./Controller");
const { validator } = require("../../middelwares/validator");
const {isAuthorized} =require("../../middelwares/authorization");

const {
  createUserSchema,
  confirmEmailSchema,
  loginUserSchema,
  chooseCoachScehma,
  addAppoinSchema,
  deleteAppoinSchema
 
} = require("./schema");

const userRoute = {
  BaseRoute: "/users",
  root: "/",
  createUser: "/sign-up",
  confrirmEmail:"/confirm-email",
  loginUser:"/login",
  chooseCoach:"/choose-coach",
  addAppointment:"/add-appointment",
  deleteAppointment:"/delete-appointment",
  getAllCoaches:"/all-coaches",
  getAllAppointments:"/all-appointments",
};

router.post(
  userRoute.createUser,
  validator(createUserSchema),
  UserController.createUserController.bind(UserController)
);

router.post(
  userRoute.confrirmEmail,
  validator(confirmEmailSchema),
  UserController.confirmEmailController.bind(UserController)
);

router.post(
  userRoute.loginUser,
  validator(loginUserSchema),
  UserController.loginUserController.bind(UserController)
);
router.get(
  userRoute.getAllCoaches,
  isAuthorized,
  UserController.getAllCoachesController.bind(UserController)
);

router.get(
  userRoute.getAllAppointments,
  isAuthorized,
  UserController.getAllAppoinController.bind(UserController)
);

router.post(
  userRoute.addAppointment,
  validator(addAppoinSchema),
  isAuthorized,
  UserController.addAppoinController.bind(UserController)
);
router.delete(
  userRoute.deleteAppointment,
  validator(deleteAppoinSchema),
  isAuthorized,
  UserController.deleteAppoinController.bind(UserController)
);

router.post(
  userRoute.chooseCoach,
  validator(chooseCoachScehma),
  isAuthorized,
  UserController.chooseCoachController.bind(UserController)
);


module.exports = {
  userRouter: router,
  userRoute,
};
