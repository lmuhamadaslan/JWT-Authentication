import express from 'express';
import { getAllUser, Register, Login, Logout } from '../controllers/Users.js';
import { VerifyToken } from '../middleware/VerifyToken.js';
import { refreshToken } from '../controllers/RefreshToken.js';

const router = express.Router();

router.get('/users', VerifyToken, getAllUser);
router.post('/auth/register', Register);
router.post('/auth/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

export default router; 
