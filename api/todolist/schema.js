const Joi = require("joi");



exports.addEventSchema = {
 
  name: Joi.string().min(4).max(255).trim().required(),
  description: Joi.string().min(20).max(1000).trim().required(),
  
};

exports.deleteEventSchema= {
  eventId:Joi.number().required(),
};

exports.editEventSchema= {
  name: Joi.string().min(4).max(255).trim().optional(),
  description: Joi.string().min(20).max(1000).trim().optional(),
};

exports.getEventSchema= {
  eventId:Joi.number().required(),
};

exports.markEventSchema= {
  eventId:Joi.number().required(),
};
