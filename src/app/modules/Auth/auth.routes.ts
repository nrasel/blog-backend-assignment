import express from 'express';
const router = express.Router();

router.post('/register');
router.post('/login');
router.post('/refresh-token');

export const authRoutes = router;
