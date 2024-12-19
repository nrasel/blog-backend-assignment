import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { blogController } from './blog.controller';
import { blogValidation } from './blog.validation';

const router = express.Router();

//wil call controller function
router.post(
  '/',
  auth('user'),
  validateRequest(blogValidation.blogValidationSchema),
  blogController.createBlog,
);

router.patch(
  '/:id',
  auth('user'),
  validateRequest(blogValidation.updateBlogValidationSchema),
  blogController.updateBlog,
);
router.delete('/:id', auth('user'), blogController.deleteBlog);
router.get('/', blogController.getAllBlogs);

export const blogRoutes = router;
