const express = require('express');
const router = express.Router();
const decksCtrl = require('../../controllers/api/decks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//POST /api/decks
router.post('/', ensureLoggedIn, decksCtrl.create);
//GET /api/decks
router.get('/', ensureLoggedIn, decksCtrl.getMyDecks); 
//DELETE /api/decks/id
router.delete('/:id', ensureLoggedIn, decksCtrl.deleteDeck);
//PUT /api/decks
router.put('/:id', ensureLoggedIn, decksCtrl.editDeck);
//GET /api/decks/all-decks
router.get('/all-decks', ensureLoggedIn, decksCtrl.getAllDecks);
//GET /api/decks/id
router.get('/:id', ensureLoggedIn, decksCtrl.findOne);
//GET /api/decks/owner/id
router.get('/owner/:id', ensureLoggedIn, decksCtrl.findOwner);

module.exports = router;