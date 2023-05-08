const leger = require("../Model/Leger")

exports.getLegerById = async (req,res)=>{
    try {
        const data = await leger.findById(req.params.id);
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.getleger = async (req,res)=>{
    try {
        const data = await leger.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postleger = async (req,res)=>{
    try {
        const newleger = new leger(req.body)
        const data = await newleger.save()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.putleger = async (req,res)=>{
    try {
        const data = await leger.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.deleteleger= async (req,res)=>{
    try {
        const data = await leger.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}
