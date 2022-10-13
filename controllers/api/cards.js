const Deck = require('../../models/deck');

async function createCard(req, res) {
    //find Deck based on ID and push this card to that deck's cards array
    const deck = await Deck.findById(req.body.deckId);
    deck.cards.push(req.body);
    await deck.save();
    res.json(deck);
};

async function getCards(req, res) {
    const deck = await Deck.findById(req.params.id);
    const findCards = deck.cards;
    res.json(findCards);
};

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