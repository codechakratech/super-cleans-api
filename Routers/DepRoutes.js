
const { getDep, postDep, putDep, deleteDep } = require('../Controller/DepController')


// router fun add
const route = require('express').Router()


// all methods routes
route.get('/', getDep)

route.post('/', postDep)

route.put('/:id', putDep)

route.delete('/:id', deleteDep)


// export route
module.exports = route