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
}, {
    timestamps: true,
});

module.exports = mongoose.model('Card', cardSchema);