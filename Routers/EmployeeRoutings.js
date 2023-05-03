const { getEmployeebyId, getEmployee,postEmployee,putEmployee,deleteEmployee,EmployeeLogin} = require("../Controller/EmployeeController")

const route = require("express").Router()

route.get("/",getEmployee)

route.get("/byid/:id", getEmployeebyId)

route.post("/",postEmployee)

route.post("/login",EmployeeLogin)

route.put("/:id",putEmployee)

route.delete("/:id",deleteEmployee)

module.exports = route


