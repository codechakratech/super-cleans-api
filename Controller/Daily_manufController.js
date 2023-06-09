const Daily_manuf = require('../Model/Daily_manuf')

// get
exports.getDaily_manuf= async (req,res)=>{
    try {
        const data = await Daily_manuf.find().populate([{path:'productname',model:'product'},{path:'packing_type',model:'weight'}])
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:false,message:error.message})
        
    }
}

// get element Br Id
exports.getDaily_manufById = async (req,res)=>{
    try {
        const data = await Daily_manuf.findById(req.params.id);
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// post
exports.postDaily_manuf= async (req,res)=>{
    try {
        const newdaily= new Daily_manuf(req.body)
        const data = await newdaily.save()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:false,message:error.message})
        
    }
}
// put
exports.putDaily_manuf= async (req,res)=>{
    try {
        const id = req.params.id
        const data = await Daily_manuf.findByIdAndUpdate(id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:false,message:error.message})
        
    }
}
// delete
exports.deleteDaily_manuf= async (req,res)=>{
    try {
        const id = req.params.id
        const data = await Daily_manuf.findOneAndDelete(id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:false,message:error.message})
        
    }
}