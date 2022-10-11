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

// async function deleteDeck(req, res) {
//     await Deck.findOneAndDelete({
//         _id: req.params.id,
//         "deck.user": req.user._id
//     });
//     res.json("Deleted Deck")
// };

module.exports = {
    create,
    getAllDecks,
    createCard,
    // deleteDeck,
};

