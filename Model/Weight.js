const mongoose = require('mongoose')

const weightSchema = new mongoose.Schema({
    weight_name: {
        type: String,
        required: true
    },
    createdby:{
        type:String
    },
    createdat:{
        type:Date,
        default:Date.now()
    }

})

module.exports= mongoose.model('weight',weightSchema)