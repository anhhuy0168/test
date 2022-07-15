const mongoose =require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)
const Account = new Schema({
    username:{type:String, require:true },
    password:{type:String, require:true },
    googleId: String,
    email: String,
    name: String

})

module.exports = mongoose.model('Account',Account)