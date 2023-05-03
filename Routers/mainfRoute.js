const { getMainf, postMainf, MainfLogin, putMainf, deleteMainf, getMainfbyId} = require("../Controller/mainfController")

const route = require('express').Router()

route.get("/byid/:id",getMainfbyId)

route.get("/",getMainf)

route.post("/",postMainf)

route.post("/login",MainfLogin)

route.put("/:id",putMainf)

route.delete("/:id",deleteMainf)

module.exports = route


