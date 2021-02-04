const Joi = require("joi");

exports.createCoachSchema = {
    name: Joi.string().min(6).max(255).trim().required(),
    password: Joi.string().min(8).max(255).required(),
    password_confirmation: Joi.any()
      .valid(Joi.ref("password"))
      .required(),
    email: Joi.string().email().max(255).required(),
    description: Joi.string().min(8).max(255).trim().required(),
    experienceLevel: Joi.number().required(),
    phoneNumber: Joi.string().required(),
    image: Joi.string().max(3000).required(),

  };
  exports.loginCoachSchema ={
    email: Joi.string().email().max(255).required(),
    password: Joi.string().min(8).max(255).required()
    
  }