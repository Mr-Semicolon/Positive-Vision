const { ServerError } = require('../util/serverError');

function notFoundHandler(req, res, next) {
  const message = 'I don\'t blame you.It is my mistake, or maybe you\'re calling a wrong endpoint';
  const response = new ServerError(message, 404);
  return next(response);
}

module.exports = {
  notFoundHandler,
};
