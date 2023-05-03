const Weight = require('../Model/Weight')


// get
exports.getWeight= async (req,res)=>{
    try {
        const data = await Weight.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:false,message:error.message})
        
    }
}
//byid
exports.getWeightbyId = async (req,res)=>{
    try {
        const data = await Weight.findById(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}
// post
exports.postWeight= async (req,res)=>{
    try {
        const newweight= new Weight(req.body)
        const data = await newweight.save()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:false,message:error.message})
        
    }
}
// put
exports.putWeight= async (req,res)=>{
    try {
        const id = req.params.id
        const data = await Weight.findByIdAndUpdate(id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:false,message:error.message})
        
    }
}
// delete
exports.deleteWeight= async (req,res)=>{
    try {
        const id = req.params.id
        const data = await Weight.findOneAndDelete(id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:false,message:error.message})
        
    }
}