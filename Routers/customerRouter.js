
const { getCustomer, postCustomer, putCustomer, deleteCustomer, getCustomerbyid } = require('../Controller/customerController')

// router fun add
const route = require('express').Router()


// all methods routes
route.get('/byid/:id',getCustomerbyid)

route.get('/', getCustomer)

route.post('/', postCustomer)

route.put('/:id', putCustomer)

route.delete('/:id', deleteCustomer)


// route exports
module.exports = route