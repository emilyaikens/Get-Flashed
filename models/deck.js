const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deckSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Deck', deckSchema);