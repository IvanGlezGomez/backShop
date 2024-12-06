const express = require("express")
const cors = require("cors")
//const routes = require('./routes/indexRoutes.js')
const routesUser = require('./routes/userRoutes.js')
const dbConnection = require('./config/config.js')
require("dotenv").config()

const PORT = process.env.PORT
const app = express()

dbConnection()

app.use(express.json())
app.use(cors())

app.use("/", routesUser)

//app.use((req, res) => res.status(404).json({error: "Page not found"}))


app.listen(PORT, () => console.log("Express listen in http://localhost:"+ PORT))