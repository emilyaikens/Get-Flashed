const express = require('express');
const router = express.Router();
const decksCtrl = require('../../controllers/api/decks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//POST /api/decks
router.post('/', ensureLoggedIn, decksCtrl.create);
//GET /api/decks
router.get('/', ensureLoggedIn, decksCtrl.getAllDecks); 
//POST /api/decks/cards
router.post('/cards', ensureLoggedIn, decksCtrl.createCard);

//DELETE /api/decks/id
//router.delete('/:id', ensureLoggedIn, decksCtrl.delete);

module.exports = router;