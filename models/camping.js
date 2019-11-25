const mongoose = require('mongoose')
const Schema = mongoose.Schema

const campingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: Number,
    description: String,
    contactInfo: {
        name: String,
        phoneNum: Number,
        email: String
    },
    category: String,
    _id: String
})

module.exports = mongoose.model("camping", campingSchema)