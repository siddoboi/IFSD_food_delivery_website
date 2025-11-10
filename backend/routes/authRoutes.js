import express from 'express';
const router = express.Router();
import { registerUser, loginUser } from '../controllers/authController.js';

// @route   POST /api/auth/register
router.post('/register', registerUser);

// @route   POST /api/auth/login
router.post('/login', loginUser);

export default router;