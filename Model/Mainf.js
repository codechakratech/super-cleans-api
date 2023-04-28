const mongoose = require('mongoose')

const manifSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    mob_no:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdby:{
        type:String
    },
    createdat:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('manuf',manifSchema)