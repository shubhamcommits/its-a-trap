const express = require('express');

const { auth, user, mentor, manager, shg } = require('../controllers');

const router = express.Router();

router.get('/login-user', auth.login_user);
router.get('/login-mentor', auth.login_mentor);
router.get('/login-manager', auth.login_manager);

router.get('/user/get-all-users', user.get_all_users);
router.post('/user/get-user', user.get_user);
router.post('/user/add-user', user.add_user);
router.post('/user/add-mentor',user.add_mentor);
router.post('/user/add-manager',user.add_manager);
router.post('/user/join-shg',user.join_shg);

router.get('/mentor/get-all-mentors',mentor.get_all_mentors);
router.post('/mentor/get-mentor',mentor.get_mentor);
router.post('/mentor/add-mentor',mentor.add_mentor);
router.post('/mentor/add-manager',mentor.add_manager);
router.post('/mentor/create-shg',mentor.create_shg);
router.post('/mentor/add-mentee',mentor.add_mentee);

router.get('/manager/get-all-managers',manager.get_all_managers);
router.post('/manager/get-manager',manager.get_manager);
router.post('/manager/add-manager',manager.add_manager);
router.post('/manager/add-mentor',manager.add_mentor);

router.get('/shg/get-all-shgs',shg.get_all_shgs);
router.post('/shg/get-shg',shg.get_shg);
router.post('/shg/add-shg',shg.add_shg);
router.post('/shg/add-mentee',shg.add_mentee);

module.exports = router;