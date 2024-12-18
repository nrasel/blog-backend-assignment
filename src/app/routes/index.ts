import { Router } from 'express';
import { authRoutes } from '../modules/Auth/auth.routes';
import { userRoutes } from '../modules/users/user.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
