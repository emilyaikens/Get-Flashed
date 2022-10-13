const Deck = require('../../models/deck');

async function create(req, res) {
    req.body.user = req.user._id;
    let newDeck = new Deck(req.body);
    await newDeck.save();
    res.json(newDeck);
};

async function getMyDecks(req, res) {
    const decks = await Deck.find({user: req.user._id});
    res.json(decks);
};

async function deleteDeck(req, res) {
    await Deck.findOneAndDelete({
        _id: req.params.id
    });
    res.json("Deleted Deck");
};

async function editDeckName(req, res) {
    const deck = await Deck.findById(req.params.id);
    deck.name = req.body.name;
    await deck.save();
    res.json(deck);
};

async function getAllDecks(req, res) {
    const decks = await Deck.find({share: "public"});
    res.json(decks);
};

async function findOne(req, res) {
    const deck = await Deck.findById(req.params.id);
    res.json(deck);
};

async function findOwner(req, res) {
    const deck = await Deck.findById(req.params.id);
    res.json(deck.user)
}

module.exports = {
    create,
    getMyDecks,
    deleteDeck,
    editDeckName,
    getAllDecks,
    findOne,
    findOwner,
};

