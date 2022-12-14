const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    deckId: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
}, {
    timestamps: true,
});

const deckSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    share: {
        type: String,
        required: true,
    },
    cards: [cardSchema],
    }, {
        timestamps: true,
    });

module.exports = mongoose.model('Deck', deckSchema);