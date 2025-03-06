const express = require('express');
const router = express.Router();
const { registerUser, getUser } = require('../controllers/userController');
router.post('/register', registerUser);
router.get('/:id', getUser);
module.exports = router;