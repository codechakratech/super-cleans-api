const mongoose = require("mongoose")

const subcategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    categories:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'category'
    },
    createdby:{
        type:String
    },
    createdat:{
        type:Date,
        default:Date.now()
    }  
})

module.exports = mongoose.model("subcategory",subcategorySchema)