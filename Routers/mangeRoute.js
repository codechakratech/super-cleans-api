const { getMange, postMange, MangeLogin, putMange, deleteMange } = require("../Controller/mangeController")

const route = require("express").Router()

route.get("/",getMange)

route.post("/",postMange)

route.post("/login",MangeLogin)

route.put("/:id",putMange)

route.delete("/:id",deleteMange)

module.exports = route


