const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : String,
    password : String,
    name : String
})

const userModel = mongoose.model('usersSchema', userSchema);
module.exports = userModel;