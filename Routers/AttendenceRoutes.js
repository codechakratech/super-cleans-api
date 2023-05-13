const {getAttendn,getAttendnbyid,postAttendn,putAttendn,deleteAttendn} = require("../Controller/AttendenceController")

const route = require("express").Router()

route.get("/",getAttendn)

route.get("/byid/:id",getAttendnbyid)

route.post("/",postAttendn)

route.put("/:id",putAttendn)

route.delete("/:id",deleteAttendn)

module.exports = route