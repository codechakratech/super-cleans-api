const { getUser, postUser, UserLogin, putUser, deleteUser,getUserbyId } = require("../Controller/userController")

const route = require("express").Router()

route.get("/",getUser)

route.get("/byid/:id",getUserbyId)

route.post("/",postUser)

route.post("/login",UserLogin)

route.put("/:id",putUser)

route.delete("/:id",deleteUser)

module.exports = route


