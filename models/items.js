const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: String,
    price: String,
    description: String,
    contactInfo: {
        userName: String,
        phoneNum: String,
        email: String
    },
    category: String,
    _id: String
})

module.exports = mongoose.model("items", itemsSchema)