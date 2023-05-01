
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile_no: {
        type: Number,
        required: true
    },
    created_by: {
        type: String
        
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    working_area: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    taluka: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('user', userSchema)