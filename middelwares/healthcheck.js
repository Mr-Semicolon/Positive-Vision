/* eslint-disable no-unused-vars */
function healthcheck(req, res, next) {
  // test in socket connection on opeing root route
  res.locals.io.emit('serverStart', { message: 'welcome to socket Server from root route' });
  return res.status(200).json({
    message: 'Server is up and running...',
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
}

module.exports = {
  healthcheck,
};
