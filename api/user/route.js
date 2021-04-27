const router = require("express-promise-router")();
const UserController = require("./Controller");
const { validator } = require("../../middelwares/validator");

const {
  createUserSchema,
  confirmEmailSchema,
  loginUserSchema,
 
} = require("./schema");

const userRoute = {
  BaseRoute: "/users",
  root: "/",
  createUser: "/sign-up",
  confrirmEmail:"/confirm-email",
  loginUser:"/login",
  
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



module.exports = {
  userRouter: router,
  userRoute,
};
