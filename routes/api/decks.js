const express = require('express');
const router = express.Router();
const decksCtrl = require('../../controllers/api/decks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', ensureLoggedIn, decksCtrl.create);
router.get('/', decksCtrl.getAll); 
router.delete('/:id', ensureLoggedIn, decksCtrl.delete);

module.exports = router;