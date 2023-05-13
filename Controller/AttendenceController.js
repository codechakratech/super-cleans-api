const Attendence = require("../Model/Attendence")

exports.getAttendn = async (req,res)=>{
    try {
        const data = await Attendence.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// get data by id
exports.getAttendnbyid = async (req,res)=>{
    try {
        const data = await Attendence.findById(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// post
exports.postAttendn = async (req,res)=>{
    try {
        const newAttendence = new Attendence(req.body)
        const data = await newAttendence.save()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}


// put
exports.putAttendn = async (req,res)=>{
    try {
        const data = await Attendence.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// delete
exports.deleteAttendn = async (req,res)=>{
    try {
        const data = await Attendence.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

