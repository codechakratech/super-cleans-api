const Role = require("../Model/Role")

exports.getRole = async (req,res)=>{
    try {
        const data = await Role.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// get data by id 
exports.getRolebyid = async (req,res)=>{
    try {
        const data = await Role.findById(req.params.id)
        return res.json({errors:false,data:data}) 
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// post
exports.postRole = async (req,res)=>{
    try {
        const newRole = new Role(req.body)
        const data = await newRole.save()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// put
exports.putRole = async (req,res)=>{
    try {
        const data = await Role.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// delete
exports.deleteRole = async (req,res)=>{
    try {
        const data = await Role.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data}) 
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}