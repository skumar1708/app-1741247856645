const User = require('../models/User');
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = new User({
      name,
      email,
      password
    });
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};