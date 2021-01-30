const PhoneNumber = require("awesome-phonenumber");

/**
 * @param {*} body request body
 * @param {verification} type is user validation or verification validation
 * @returns
 */
function validateMobile(mobile) {
  const phone = new PhoneNumber(mobile);

  if (!phone.isValid()) {
    // return same error object like Joi error to be hamdled in controller
    return { error: { details: [{ message: "Mobile number is not valid " }] } };
  }
  return false;
}

exports.valiateMobile = (req, res, next) => {
  if (req.body && !req.body.mobile) {
    return next();
  }

  const { error } = validateMobile(req.body.mobile);

  if (error) {
    return next({
      message: error.details[0].message,
      status: 400,
    });
  }

  return next();
};
