const Deck = require('../../models/deck');

async function create(req, res) {
    req.body.user = req.user._id;
    let newDeck = new Deck(req.body);
    await newDeck.save();
    res.json(newDeck);
};

async function getAllDecks(req, res) {
    const decks = await Deck.find({user: req.user._id})
    res.json(decks);
};

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

async function deleteDeck(req, res) {
    await Deck.findOneAndDelete({
        _id: req.params.id
    });
    res.json("Deleted Deck")
};

// async function deleteCard(req, res) {
//     const deck = await Deck.findById(req.params.id);
//     //deck.cards.findById(req.body._id);
//     console.log(deck.cards);
//     //console.log(req.body._id)
//     //console.log(req.params.id)
// }

module.exports = {
    create,
    getAllDecks,
    createCard,
    getCards,
    deleteDeck,
    deleteCard,
};

