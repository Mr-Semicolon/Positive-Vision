const { ServerError } = require('../util/serverError');
const db = require('../../models');
const { logger } = require('../../config/logger');

class BaseController {
  /**
   *Creates an instance of BaseController.
   * @memberof BaseController
   */
  constructor() {
    this.statusCode = 200;
    this.db = db;
    this.logger = logger;
  }

  /**
   *
   *
   * @param {string} [message='']
   * @param {*} data
   * @returns
   * @memberof BaseController
   */
  sendResponse(message = '', data = {}) {
    const statusCode = this.getStatusCode();
    if (Object.keys(data).length) {
      return {
        statusCode,
        message,
        data,
      };
    }
    return { statusCode, message };
  }

  /**
   *
   *
   * @returns {Number}
   * @memberof BaseController
   */
  getStatusCode() {
    return this.statusCode;
  }

  /**
   *
   *
   * @param {Number} statusCode
   * @returns {BaseController}
   * @memberof BaseController
   */
  setStatusCode(statusCode) {
    this.statusCode = statusCode;
    return this;
  }

  /**
   *
   *
   * @param {string} [message='']
   * @param {*} data
   * @returns {ServerError}
   * @memberof BaseController
   */
  sendErrorResponse(message = '', data = {}) {
    const statusCode = this.getStatusCode();
    if (Object.keys(data).length) {
      return new ServerError(message, statusCode, data);
    }
    return new ServerError(message, statusCode);
  }
}

module.exports = {
  BaseController,
}
