const {getSales,postSales,putSales,deleteSales,salesLogin,getsalesbyId} = require("../Controller/SalesController")

const route = require("express").Router()

route.get("/",getSales)

route.get("/byid/:id",getsalesbyId)

route.post("/",postSales)

route.post("/login",salesLogin)

route.put("/:id",putSales)

route.delete("/:id",deleteSales)

module.exports = route


