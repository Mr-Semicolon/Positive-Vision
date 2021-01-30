const router = require("express-promise-router")();
const validator = require("../../middlewares/validator")
const UserController = require("./Controller");

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
