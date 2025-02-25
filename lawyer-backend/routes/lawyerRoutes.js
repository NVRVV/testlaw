const express = require('express');
const { getLawyers } = require('../controllers/lawyerController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/lawyers', authMiddleware, getLawyers);

module.exports = router;
