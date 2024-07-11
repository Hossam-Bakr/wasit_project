const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get user info
router.get('/:id', userController.getUserInfo);

module.exports = router;
