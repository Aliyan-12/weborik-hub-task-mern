import express from 'express';
import verifyToken from '../middleware/auth.js';

const router = express.Router();

router.get('/profile', verifyToken, async (req, res) => {
  try {
    res.json({
      success: true,
      message: 'Profile retrieved successfully',
      data: {
        userId: req.user.userId,
        email: req.user.email,
        role: req.user.role
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching profile',
      error: error.message
    });
  }
});

export default router;