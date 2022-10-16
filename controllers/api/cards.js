const Deck = require('../../models/deck');

//find deck by id and push new card using form body
    async function createCard(req, res) {
        const deck = await Deck.findById(req.body.deckId); 
        deck.cards.push(req.body); 
        await deck.save();
        res.json(deck);
    };

//find deck by id and find cards within that deck
    async function getCards(req, res) {
        const deck = await Deck.findById(req.params.id); 
        const findCards = deck.cards; 
        res.json(findCards);
    };

//find deck by id and card by id, then remove that card
    async function deleteCard(req, res) {
        const deck = await Deck.findById(req.params.id).then(function(t) { 
            const card = t.cards.id(req.body._id);
            card.remove();
            t.save();
        })
        res.json("Deleted Card");
    }

module.exports = {
    createCard,
    getCards,
    deleteCard,
};