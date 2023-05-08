const Income = require("../Model/Income");
const Leger = require('../Model/Leger')
exports.getIncomeById = async (req, res) => {
    try {
        const data = await Income.findById(req.params.id);
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.getIncome = async (req, res) => {
    try {
        const data = await Income.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.postIncome = async (req, res) => {
    try {
        const leger = await Leger.find()
        if (leger.length == 0) {
         await Leger.create({total_amount:req.body.amount,total_income:req.body.amount})
         res.send(myleger)
        } else {
            const ta = leger[0].total_amount + req.body.amount;
            const ti = leger[0].total_income + req.body.amount
          await Leger.findByIdAndUpdate(leger[0]._id,{total_amount:ta,total_income:ti})
        }
        const newincome = new Income(req.body)
        const data = await newincome.save()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.putIncome = async (req, res) => {
    try {
        const data = await Income.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.deleteIncome = async (req, res) => {
    try {
        const data = await Income.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

