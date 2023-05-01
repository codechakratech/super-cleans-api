// import packages
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

// adding routers
const OrderRouter = require('./Routers/orderRouter')
const userRouter = require('./Routers/userRouter')
const Daily_manufRouter = require('./Routers/Daily_manufRouter')
const Salesroute = require("./Routers/SalesRoutes")
const Categoryroute = require("./Routers/CategoryRoutes") 
const Subategoryroute = require("./Routers/SubcategoryRoutes")
const Employeeroute = require("./Routers/EmployeeRoutings")
const mainfRoute = require('./Routers/mainfRoute')
const mangeRoute = require('./Routers/mangeRoute')
const Productroute = require("./Routers/ProductRoutes")
const deproute = require("./Routers/DepRoutes")
const weightRoute = require("./Routers/WeightRoutes")

// inilization
const app = express()


// midd
app.use(express.json())
app.use(cors())

// default get
app.get('/', (req, res) => {
    res.send('This is Backend page')
})

// url
app.use('/api/order',OrderRouter)
app.use('/api/user',userRouter)
app.use('/api/daily_manufacture',Daily_manufRouter)
app.use("/api/sales",Salesroute)
app.use("/api/categorys",Categoryroute)
app.use("/api/subcategorys",Subategoryroute)
app.use("/api/employee",Employeeroute)
app.use('/api/manufacture', mainfRoute)
app.use('/api/management', mangeRoute)
app.use("/api/product",Productroute)
app.use("/api/dep",deproute)
app.use("/api/weight",weightRoute)

// listen
app.listen(process.env.PORT)




// connection string
async function main() {
    const res = await mongoose.connect(process.env.DB,{useNewUrlParser: true,
        useUnifiedTopology: true})
        const data = res.default
        console.log(data.STATES['1']);
}
main()


