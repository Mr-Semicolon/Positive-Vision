const Joi = require("joi");



exports.createCourseSchema = {
  name: Joi.string().min(6).max(255).trim().required(),
  description: Joi.string().min(20).max(1000).trim().required(),
  hours: Joi.number().required(),
  coachId:Joi.number().required(),
};

exports.deleteCourseSchema= {
 courseId: Joi.string().min(6).max(255).trim().required(),
};

exports.editCourseSchema= {
  name: Joi.string().min(6).max(255).trim().optional(),
  description: Joi.string().min(20).max(1000).trim().optional(),
  hours: Joi.number().optional(),
};
