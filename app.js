// import packages
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

// adding routers
const OrderRouter = require('./Routers/orderRouter')
const CustomerRouter = require('./Routers/customerRouter')
const Daily_manufRouter = require('./Routers/Daily_manufRouter')
const Categoryroute = require("./Routers/CategoryRoutes") 
const Subategoryroute = require("./Routers/SubcategoryRoutes")
const userRoute = require('./Routers/userRoute')
const Productroute = require("./Routers/ProductRoutes")
const deproute = require("./Routers/DepRoutes")
const weightRoute = require("./Routers/WeightRoutes")
const roleRoutes = require("./Routers/RoleRoutes")
const incoRouter = require('./Routers/incoRouter')
const expRouter = require('./Routers/expRouter')
const legerRouter = require('./Routers/legerRouter')
const AttendenceRoute = require("./Routers/AttendenceRoutes")
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
app.use('/api/customer',CustomerRouter)
app.use('/api/daily_manufacture',Daily_manufRouter)
app.use("/api/categorys",Categoryroute)
app.use("/api/subcategorys",Subategoryroute)
app.use('/api/user', userRoute)
app.use("/api/product",Productroute)
app.use("/api/dep",deproute)
app.use("/api/weight",weightRoute)
app.use("/api/role",roleRoutes)
app.use('/api/income', incoRouter)
app.use('/api/expence', expRouter)
app.use('/api/leger', legerRouter)
app.use("/api/attendence",AttendenceRoute)

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

 
