
const { getUser, postUser, putUser, deleteUser, getUserbyid } = require('../Controller/userController')

// router fun add
const route = require('express').Router()


// all methods routes
route.get('/byid/:id',getUserbyid)

route.get('/', getUser)

route.post('/', postUser)

route.put('/:id', putUser)

route.delete('/:id', deleteUser)


// route exports
module.exports = route