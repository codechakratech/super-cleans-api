const mongoose = require("mongoose")

const attendenceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    presenty:{
        type:String,
        required:true 
    },
    desc:{
        type:String
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("attendence",attendenceSchema)