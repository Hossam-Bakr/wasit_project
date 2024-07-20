const express = require('express');
const emailController = require('../controllers/emailController');

const router = express.Router();

router.post('/send', emailController.upload.single('image'), emailController.sendEmail);

module.exports = router;
