const Deck = require('../../models/deck');

async function create(req, res) {
    console.log('controller create function');
    req.body.user = req.user._id;
    let newDeck = new Deck(req.body);
    await newDeck.save();
    res.json(newDeck);
};

async function getAll(req, res) {
    const decks = await Deck.find({user: req.user._id})
    res.json(decks);
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
    getAll,
    // deleteDeck,
};

