const { getWeight, postWeight, putWeight, deleteWeight } = require('../Controller/WeightController')

const route = require('express').Router()

route.get('/', getWeight)

route.post('/', postWeight)

route.put('/:id', putWeight)

route.delete('/:id', deleteWeight)


module.exports = route