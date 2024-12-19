import express from 'express';
const router = express.Router();

router.patch('/users/:userId/block');
router.delete('/blogs/:id');

export const adminRoutes = router;
