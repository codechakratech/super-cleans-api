const mongoose = require('mongoose')

const legerSchema = new mongoose.Schema({
    total_income: {
        type: Number,
       default:0
    },
    total_expence: {
        type:Number ,
        default:0
    },
   
    total_amount: {
        type: Number,
        default:0
    }
   
})

module.exports = mongoose.model('leger',legerSchema)