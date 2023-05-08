
const { getleger, postleger, putleger, deleteleger, getLegerById } = require('../Controller/legerController')


// router fun add
const route = require('express').Router()


// all methods routes

route.get('/byid/:id',getLegerById)

route.get('/',getleger)

route.post('/',postleger)

route.put('/:id',putleger)

route.delete('/:id',deleteleger)


// export route
module.exports = route