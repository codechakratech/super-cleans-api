const Expence = require("../Model/Expence");


// get element By Id
exports.getExpenceById = async (req,res)=>{
    try {
        const data = await Expence.findById(req.params.id);
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}
// get
exports.getExpence = async (req,res)=>{
    try {
        const data = await Expence.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postExpence = async (req,res)=>{
    try {
        const newexp = new Expence(req.body)
        const data = await newexp.save()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.putExpence = async (req,res)=>{
    try {
        const data = await Expence.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.deleteExpence= async (req,res)=>{
    try {
        const data = await Expence.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}
