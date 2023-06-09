const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'customer'
    },
    product_name: {
         type: mongoose.Schema.Types.ObjectId, 
         ref:'product'
    },
    order_in_kg: {
        type: Number,
        required: true
    },
     delivery_date: {
        type: Date
    },
    advance_Payment: {
        type: Number,
        required: true
    },
    Pending_payment: {
        type: Number,
        required: true
    },
    payment_status: {
        type: String,
        required: true
    },
    created_by: {
        type: String
        
    },
    created_at: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('order', orderSchema)
