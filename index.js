const express = require("express")
const routes = require('./routes/indexRoutes.js')
require("dotenv").config()

const PORT = process.env.PORT
const app = express()



app.use("/", routes)
app.use((req, res) => res.status(404).json({error: "Page not found"}))


app.listen(PORT, () => console.log("Express listen in http://localhost:"+ PORT))