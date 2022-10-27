const Deck = require('../../models/deck');

//create new deck using user id and form body
    async function create(req, res) {
        req.body.user = req.user._id;
        let newDeck = new Deck(req.body);
        await newDeck.save();
        res.json(newDeck);
    };

//find decks by id
    async function getMyDecks(req, res) {
        const decks = await Deck.find({user: req.user._id});
        res.json(decks);
    };

//find deck by id and delete    
    async function deleteDeck(req, res) {
        await Deck.findOneAndDelete({
            _id: req.params.id
        });
        res.json("Deleted Deck");
    };

//find deck by id, assign new name, and save
    async function editDeck(req, res) {
        const deck = await Deck.findById(req.params.id);
        deck.name = req.body.name;
        deck.share = req.body.share;
        await deck.save();
        res.json(deck);
    };

//find decks that are public
    async function getAllDecks(req, res) {
        const decks = await Deck.find({share: "public"});
        res.json(decks);
    };

//find deck by id    
    async function findOne(req, res) {
        const deck = await Deck.findById(req.params.id);
        res.json(deck);
    };

//find deck by id and return owner    
    async function findOwner(req, res) {
        const deck = await Deck.findById(req.params.id);
        res.json(deck.user)
    };

module.exports = {
    create,
    getMyDecks,
    deleteDeck,
    editDeck,
    getAllDecks,
    findOne,
    findOwner,
};

