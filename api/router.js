const router = require("express-promise-router")();
const { userRoute, userRouter } = require('./user/route');
const { coachRoute, coachRouter } = require('./coach/route');
router.use(userRoute.BaseRoute, userRouter);
router.use(coachRoute.BaseRoute, coachRouter);
module.exports = { appRouter: router };