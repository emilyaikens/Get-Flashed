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
//GET /api/decks/id
router.get('/:id', ensureLoggedIn, decksCtrl.getCards);
//DELETE /api/decks/id
router.delete('/:id', ensureLoggedIn, decksCtrl.deleteDeck);
//PUT /api/decks
router.put('/:id', ensureLoggedIn, decksCtrl.editDeckName);
//DELETE /api/decks/card/id
//router.delete('/card/:id', ensureLoggedIn, decksCtrl.deleteCard)

module.exports = router;