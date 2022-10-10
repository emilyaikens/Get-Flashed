const Deck = require('../../models/deck');
const Card = require('../../models/card');

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
    req.body.user = req.user._id;
    let newCard = new Card(req.body);
    await newCard.save();
    res.json(newCard);
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

