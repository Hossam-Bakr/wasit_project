const User = require('../models/User');
const UserProfile = require('../models/UserProfile');

// Get user info
exports.getUserInfo = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.id },
      include: [UserProfile]
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
