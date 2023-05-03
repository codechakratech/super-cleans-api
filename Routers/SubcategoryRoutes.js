const {getSubcategory,postSubcategory,putSubcategory,deleteSubcategory, getSubcatbyid} = require("../Controller/SubcategoryController")

const route = require("express").Router()

route.get('/byid/:id',getSubcatbyid)

route.get("/",getSubcategory)

route.post("/",postSubcategory)

route.put("/:id",putSubcategory)

route.delete("/:id",deleteSubcategory)

module.exports = route


