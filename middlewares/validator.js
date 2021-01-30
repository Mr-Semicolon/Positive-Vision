/* eslint-disable no-prototype-builtins */
const Joi = require('joi');
const { logger } = require('../config/logger');

function validator(schema) {
  return (req, res, next) => {
    const { query, body, method } = req;
    logger.info('query to validate >> ', query);
    logger.info('body to validate >> ', body);

    if (query) {
      for (const key in query) {
        if (query.hasOwnProperty(key)) {
          query[key] = query[key] ? query[key].trim() : '';
        }
      }
    }
  
    const { error } = method === 'GET' || method === "DELETE"  ? Joi.validate(query, schema) : Joi.validate(body, schema);
    if (error) {
      logger.error(error.details[0].message)
      return res.status(400).json({
        error: {
          message: error.details[0].message,
          status: 400,
        },
      });
    }



    return next();
  };
}

module.exports = {
  validator,
};
