import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from '../users/user.validation';
import { authController } from './auth.controller';
import { AuthValidation } from './auth.validation';
const router = express.Router();

router.post(
  '/register',
  validateRequest(UserValidation.userValidationSchema),
  authController.registerUser,
);
router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  authController.loginUser,
);

export const authRoutes = router;
