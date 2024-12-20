import express from 'express';
import auth from '../../middlewares/auth';
import { adminController } from './admin.controller';
const router = express.Router();

router.patch('/users/:userId/block', auth('admin'), adminController.blockUser);
router.delete('/blogs/:id', auth('admin'), adminController.deleteBlog);

export const adminRoutes = router;
