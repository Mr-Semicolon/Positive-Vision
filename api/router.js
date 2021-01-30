const router = require("express-promise-router")();
const { userRoute, userRouter } = require('./user/route');
router.use(userRoute.BaseRoute, userRouter);
module.exports = { appRouter: router };