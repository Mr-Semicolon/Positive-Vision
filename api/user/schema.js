const Joi = require("joi");

const date = new Date();

exports.createUserSchema = {
  name: Joi.string().min(6).max(255).trim().required(),
  password: Joi.string().min(8).max(255).required(),
  password_confirmation: Joi.any()
    .valid(Joi.ref("password"))
    .required(),
  BOD: Joi.date()
    .max(`01-01-${date.getFullYear() - 15}`)
    .optional(),
  gender: Joi.string().valid("Male", "Female").required(),
  email: Joi.string().email().max(255).required(),
  address: Joi.string().max(255).required(),
  socialMedia: Joi.string().max(255).required(),
  image: Joi.string().max(3000).required(),
  facebookOrTwitter: Joi.string().valid("Facebook", "Twitter").required(),
};
exports.loginUserSchema = {
  email: Joi.string().email().max(255).required(),
  password: Joi.string().min(8).max(255).required(),
};
exports.confirmEmailSchema = {
  email: Joi.string().email().max(255).required(),
  theString: Joi.string().max(255).required(),
};

exports.chooseCoachScehma = {

  coachId : Joi.number().required(),
};

exports.deleteAppoinSchema = {
  appoiId : Joi.number().required(),
};


exports.addAppoinSchema = {
  name: Joi.string().min(4).max(255).trim().required(),
  date: Joi.string().max(12).required(),
  time: Joi.string().max(8).required(),
  hours: Joi.string().max(2).required(),
};