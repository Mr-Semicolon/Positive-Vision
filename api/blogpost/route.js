const router = require("express-promise-router")();
const BlogPostController = require("./Controller");
const { validator } = require("../../middelwares/validator");
const {isAuthorized} =require("../../middelwares/authorization");

const {
  createBlogPostSchema,
  deleteBlogPostSchema,
  editBlogPostSchema,
  getBlogPostSchema,
 
} = require("./schema");

const blogpostRoute = {
  BaseRoute: "/blogposts",
  root: "/",
  createBlogPost: "/add-blogpost",
  deleteBlogPost: "/delete-blogpost",
  editBlogPost:"/edit-blogpost",
  getBlogPost:"/get-blogpost",
  
};

router.post(
  blogpostRoute.createBlogPost,
  validator(createBlogPostSchema),
  isAuthorized,
  BlogPostController.createBlogPostController.bind(BlogPostController)
);

router.delete(
  blogpostRoute.deleteBlogPost,
  validator(deleteBlogPostSchema),
  isAuthorized,
  BlogPostController.deleteBlogPostController.bind(BlogPostController)
);

router.put(
  blogpostRoute.editBlogPost,
  validator(editBlogPostSchema),
  isAuthorized,
  BlogPostController.editBlogPostController.bind(BlogPostController)
);
router.get(
  blogpostRoute.getBlogPost,
  validator(getBlogPostSchema),
  isAuthorized,
  BlogPostController.getBlogPostController.bind(BlogPostController)
);

module.exports = {
  blogpostRouter: router,
  blogpostRoute,
};
