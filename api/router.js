const router = require("express-promise-router")();
const { userRoute, userRouter } = require('./user/route');
const { coachRoute, coachRouter } = require('./coach/route');
const {courseRoute,courseRouter}=require('./course/route');
router.use(userRoute.BaseRoute, userRouter);
router.use(coachRoute.BaseRoute, coachRouter);
router.use(courseRoute.BaseRoute,courseRouter);
module.exports = { appRouter: router };