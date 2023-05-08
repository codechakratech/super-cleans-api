const {getRole,getRolebyid,postRole,putRole,deleteRole} = require("../Controller/RoleController")

const route = require("express").Router()

route.get("/",getRole)

route.get("/byid/:id",getRolebyid)

route.post("/",postRole)

route.put("/:id",putRole)

route.delete("/:id",deleteRole)

module.exports = route