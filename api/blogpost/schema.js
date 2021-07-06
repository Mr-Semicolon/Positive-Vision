const Joi = require("joi");



exports.createBlogPostSchema = {
  
  title: Joi.string().min(20).max(1000).trim().required(),
  content: Joi.string().min(10).max(2000).trim().required(),
  
};

exports.deleteBlogPostSchema= {
  blogpostId:Joi.number().required(),
};

exports.editBlogPostSchema= {
    title: Joi.string().min(20).max(1000).trim().optional(),
    content: Joi.string().min(10).max(2000).trim().optional(),
};

exports.getBlogPostSchema= {
  blogpostId:Joi.number().required(),
};
