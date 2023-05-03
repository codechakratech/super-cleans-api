const { getWeightbyId, getWeight, postWeight, putWeight, deleteWeight } = require('../Controller/WeightController')

const route = require('express').Router()

route.get('/', getWeight)

route.get("/byid/:id",getWeightbyId)

route.post('/', postWeight)

route.put('/:id', putWeight)

route.delete('/:id', deleteWeight)


module.exports = route