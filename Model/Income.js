const mongoose = require('mongoose')

const incoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    amount: {
        type: Number,
        required: true
    },
    income_type: {
        type: String,
        required: true
    },
    description: {
        type: String,
      

    }
})

module.exports = mongoose.model('inco',incoSchema)