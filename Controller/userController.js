const User = require('../Model/User')

exports.getUserbyid = async (req,res)=>{
    try {
        const data = await User.findById(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// get
exports.getUser = async (req, res) => {
    try {
        const data = await User.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: false, message: error.message })
    }
}


// post
exports.postUser = async (req,res)=>{
    try {
        const newuser= new User(req.body)
        const data = await newuser.save()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})  
    }
}


// put
exports.putUser = async (req,res)=>{
    try {
        const id = req.params.id
        const data = await User.findByIdAndUpdate(id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}


// delete
exports.deleteUser = async (req,res)=>{
    try {
        const id = req.params.id
        const data = await User.findByIdAndDelete(id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}