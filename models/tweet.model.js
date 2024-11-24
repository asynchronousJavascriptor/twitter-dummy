const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    tweet: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        trim: true
    }
}, { timestamps: true });

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;

