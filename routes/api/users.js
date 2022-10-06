const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// call the middleware
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

// POST : http://localhost:3001/api/users
router.post('/', usersCtrl.create);

// POST : http://localhost:3001/api/users/login
router.post('/login', usersCtrl.login);

module.exports = router;