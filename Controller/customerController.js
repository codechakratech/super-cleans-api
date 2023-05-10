const Customer = require('../Model/Customer')

exports.getCustomerbyid = async (req,res)=>{
    try {
        const data = await Customer.findById(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// get
exports.getCustomer = async (req, res) => {
    try {
        const data = await Customer.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: false, message: error.message })
    }
}


// post
exports.postCustomer = async (req,res)=>{
    try {
        const newCustomer = new Customer(req.body)
        const data = await newCustomer.save()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})  
    }
}


// put
exports.putCustomer = async (req,res)=>{
    try {
        const id = req.params.id
        const data = await Customer.findByIdAndUpdate(id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}


// delete
exports.deleteCustomer = async (req,res)=>{
    try {
        const id = req.params.id
        const data = await Customer.findByIdAndDelete(id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}
