const Joi = require("joi");



exports.createBlogPostSchema = {
  image: Joi.string().min(6).max(255).trim().required(),
  title: Joi.string().min(20).max(1000).trim().required(),
  content: Joi.string().min(10).max(2000).trim().required(),
  coachId:Joi.number().required(),
};

exports.deleteBlogPostSchema= {
  blogpostId:Joi.number().required(),
};

exports.editBlogPostSchema= {
    image: Joi.string().min(6).max(255).trim().required(),
    title: Joi.string().min(20).max(1000).trim().required(),
    content: Joi.string().min(10).max(2000).trim().required(),
};
