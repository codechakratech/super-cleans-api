const {getProduct,postProduct,putProduct,deleteProduct,getproductbyId} = require("../Controller/ProductController")

const route = require("express").Router()

route.get("/",getProduct)

route.get("/byid/:id",getproductbyId)

route.post("/",postProduct)

route.put("/:id",putProduct)

route.delete("/:id",deleteProduct)

module.exports = route