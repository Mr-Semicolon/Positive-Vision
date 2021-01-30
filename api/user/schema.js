const Joi = require("joi");

const date = new Date();

exports.createUserSchema = {
  name: Joi.string().min(6).max(255).trim().required(),
  mobile: Joi.string().required(),
  password: Joi.string().min(8).max(255).required(),
  password_confirmation: Joi.any()
    .valid(Joi.ref("password"))
    .required()
    .options({
      language: {
        any: {
          allowOnly: "must match password",
        },
      },
    }),
  BOD: Joi.date()
    .max(`01-01-${date.getFullYear() - 15}`)
    .optional(),
  gender: Joi.string().valid("Male", "Female").required(),
  email: Joi.string().email().max(255).required(),
  address: Joi.string().max(255).required(),
  socialMedia: Joi.string().max(255).required(),
  facebookOrTwitter: Joi.string().valid("Facebook", "Twitter").required(),
};
