
const Order = require('../Model/Order')

exports.getOrderbyid = async (req,res)=>{
    try {
        const data = await Order.findById(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}


// get
exports.getOrder= async (req,res)=>{
    try {
        const data = await Order.find().populate([{path:'product_name',model:'product'},{path:'name',model:'customer'}])
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:false,message:error.message})
        
    }
}
// post
exports.postOrder= async (req,res)=>{
    try {
        const neworder= new Order(req.body)
        const data = await neworder.save()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:false,message:error.message})
        
    }
}
// put
exports.putOrder= async (req,res)=>{
    try {
        const id = req.params.id
        const data = await Order.findByIdAndUpdate(id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:false,message:error.message})
        
    }
}
// delete
exports.deleteOrder= async (req,res)=>{
    try {
        const id = req.params.id
        const data = await Order.findOneAndDelete(id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:false,message:error.message})
        
    }
}