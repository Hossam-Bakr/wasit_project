const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
// const UserProfile = require('../models/UserProfile');

const router = express.Router();

// -- localhost:3000/auth/register
router.post('/register', async (req, res) => {
  const {email, password, firstName, lastName } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({  email, password: hashedPassword, firstName, lastName });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'User already exists or input is invalid' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user.id }, 'your_jwt_secret');
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

module.exports = router;

