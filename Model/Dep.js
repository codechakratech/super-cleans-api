const mongoose = require('mongoose')

const depSchema = new mongoose.Schema({
    dept_name: {
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

module.exports= mongoose.model('department',depSchema)