const Dep = require('../Model/Dep')

// get
exports.getDep= async (req,res)=>{
    try {
        const data = await Dep.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:false,message:error.message})
        
    }
}
// post
exports.postDep= async (req,res)=>{
    try {
        const newdep= new Dep(req.body)
        const data = await newdep.save()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:false,message:error.message})
        
    }
}
// put
exports.putDep= async (req,res)=>{
    try {
        const id = req.params.id
        const data = await Dep.findByIdAndUpdate(id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:false,message:error.message})
        
    }
}
// delete
exports.deleteDep= async (req,res)=>{
    try {
        const id = req.params.id
        const data = await Dep.findOneAndDelete(id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:false,message:error.message})
        
    }
}