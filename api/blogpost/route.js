const router = require("express-promise-router")();
const BlogPostController = require("./Controller");
const { validator } = require("../../middelwares/validator");

const {
  createBlogPostSchema,
  deleteBlogPostSchema,
  editBlogPostSchema,
 
} = require("./schema");

const blogpostRoute = {
  BaseRoute: "/blogposts",
  root: "/",
  createBlogPost: "/add-blogpost",
  deleteBlogPost: "/delete-blogpost",
  editBlogPost:"/edit-blogpost",
  
};

router.post(
  blogpostRoute.createBlogPost,
  validator(createBlogPostSchema),
  BlogPostController.createBlogPostController.bind(BlogPostController)
);

router.delete(
  blogpostRoute.deleteBlogPost,
  validator(deleteBlogPostSchema),
  BlogPostController.deleteBlogPostController.bind(BlogPostController)
);

router.put(
    blogpostRoute.editBlogPost,
  validator(editBlogPostSchema),
  BlogPostController.editBlogPostController.bind(BlogPostController)
);

module.exports = {
  blogpostRouter: router,
  blogpostRoute,
};
