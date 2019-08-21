const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    googleId: String,
    role: String,
    patientA: String,
    thumbnail: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;
