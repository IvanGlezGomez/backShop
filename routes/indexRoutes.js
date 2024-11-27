const express = require("express")
const router = express.Router()
const userRoutes = require('./userRoutes.js')
const authRoutes = require('./authRoutes.js')

router.use("/", userRoutes)
router.use("/", authRoutes)


module.exports = router