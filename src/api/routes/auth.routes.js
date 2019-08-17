const express = require('express');

const { auth } = require('../controllers');

const router = express.Router();

router.get('/login-user', auth.login_user);
router.get('/login-mentor', auth.login_mentor);
router.get('/login-manager', auth.login_manager);

module.exports = router;