
const { getIncome, postIncome, putIncome, deleteIncome, getIncomeById } = require('../Controller/incoController')


// router fun add
const route = require('express').Router()


// all methods routes

route.get('/byid/:id',getIncomeById)

route.get('/', getIncome)

route.post('/',postIncome)

route.put('/:id',putIncome)

route.delete('/:id',deleteIncome)


// export route
module.exports = route