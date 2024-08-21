const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, '{PATH} is required'],
        minlength: [4, 'Content must be at least 4 character long']
    },
    punchline: {
        type: String,
        required: [true, '{PATH} is required'],
        minlength: [4, 'Content must be at least 4 character long']
    }
}, { timestamps: true });
const Joke = mongoose.model('Joke', JokeSchema);
module.exports = Joke
