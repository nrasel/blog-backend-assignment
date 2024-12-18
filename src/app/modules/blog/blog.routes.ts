import express from 'express';
import { blogController } from './blog.controller';

const router = express.Router();

//wil call controller function
router.post('/blogs', blogController.createBlog);

router.patch('/blogs/:id', blogController.updateBlog);
router.delete('/blogs/:id', blogController.deleteBlog);
router.get('/blogs', blogController.getAllBlogs);

export const StudentRoutes = router;
