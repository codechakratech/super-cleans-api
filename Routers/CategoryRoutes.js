const {getCategory,postCategory,putCategory,deleteCategory, getCatbyid} = require("../Controller/CategoryController")

const route = require("express").Router()

route.get('/byid/:id',getCatbyid)

route.get("/",getCategory)

route.post("/",postCategory)

route.put("/:id",putCategory)

route.delete("/:id",deleteCategory)

module.exports = route


