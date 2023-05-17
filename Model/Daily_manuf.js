const mongoose = require('mongoose')

const dailySchema = new mongoose.Schema({
    productname:        { type: mongoose.Schema.Types.ObjectId, ref:'product' },
    batch:              { type: String, required: true },
    total_product_kg:   { type: Number, required: true }, 
    filling:            { type: Number, required: true },
    packing_type:       { type: mongoose.Schema.Types.ObjectId, ref:'weight' },
    status:             { type: String, required: true },
    bag:                { type: Number, required: true },
    date:               { type: Date },
    created_by:         { type: String },
    created_at:         { type: Date, default: Date.now()}
})

module.exports= mongoose.model('daily',dailySchema)