const Subcategory = require("../Model/Sub-Category")

exports.getSubcatbyid = async (req,res)=>{
    try {
        const data = await Subcategory.findById(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.getSubcategory = async (req,res)=>{
    try {
        const data = await Subcategory.find().populate('categories')
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postSubcategory = async (req,res)=>{
    try {
        const newSubcategory = new Subcategory(req.body)
        const data = await newSubcategory.save()
        return res.json({errors:false,data:data}) 
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.putSubcategory = async (req,res)=>{
    try {
        const data = await Subcategory.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})  
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message}) 
    }
}

exports.deleteSubcategory = async (req,res)=>{
    try {
        const data = await Subcategory.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})    
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message}) 
    }
}

