const { getMainf, postMainf, MainfLogin, putMainf, deleteMainf } = require("../Controller/mainfController")

const route = require('express').Router()

route.get("/",getMainf)

route.post("/",postMainf)

route.post("/login",MainfLogin)

route.put("/:id",putMainf)

route.delete("/:id",deleteMainf)

module.exports = route


