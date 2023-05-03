const mongoose = require("mongoose")

const empSchema = new mongoose.Schema({
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
    Mobile_no:{
        type:Number,
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
    }
})

module.exports = mongoose.model("employee",empSchema)
