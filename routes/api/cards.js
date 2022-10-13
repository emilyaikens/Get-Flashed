const express = require('express');
const router = express.Router();
const cardsCtrl = require('../../controllers/api/cards');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//POST /api/cards/cards
router.post('/cards', ensureLoggedIn, cardsCtrl.createCard);
//GET /api/cards/id
router.get('/:id', ensureLoggedIn, cardsCtrl.getCards);
//DELETE /api/cards/card/id
router.delete('/card/:id', ensureLoggedIn, cardsCtrl.deleteCard)

module.exports = router;