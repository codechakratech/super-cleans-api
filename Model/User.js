const mongoose = require("mongoose")

const userSchema = new mongoose.Schema ({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    aadharno:{
        type:String,
        required:true
    },
    aadharphoto:{
        type:String,
        required:true
    },
    profileimg:{
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
    },
    role:{
        type:String
    }
})

module.exports = mongoose.model('user',userSchema)