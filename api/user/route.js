const router = require("express-promise-router")();
const UserController = require("./Controller");
const { validator } = require("../../middelwares/validator");

const {
  createUserSchema,
 
} = require("./schema");

const userRoute = {
  BaseRoute: "/users",
  root: "/",
  createUser: "/sign-up",
  
};

router.post(
  userRoute.createUser,
  validator(createUserSchema),
  UserController.createUserController.bind(UserController)
);


module.exports = {
  userRouter: router,
  userRoute,
};
