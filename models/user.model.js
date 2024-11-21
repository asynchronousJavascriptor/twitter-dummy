const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    posts: {
        type: Array,
        default: []
    }
}, { timestamps: true });

const User = mongoose.model('user', userSchema);

module.exports = User;

