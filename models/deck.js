const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cardSchema = require('./card')

const deckSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    public: {
        type: Boolean,
        required: true,
        default: false,
    },
    cards: [cardSchema]
    }, {
        timestamps: true,
    });

module.exports = mongoose.model('Deck', deckSchema);