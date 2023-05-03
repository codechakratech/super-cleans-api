const {getProduct,postProduct,putProduct,deleteProduct, getprobyid} = require("../Controller/ProductController")

const route = require("express").Router()

route.get('/byid/:id',getprobyid)

route.get("/",getProduct)

route.post("/",postProduct)

route.put("/:id",putProduct)

route.delete("/:id",deleteProduct)

module.exports = route