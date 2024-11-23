const express = require("express")
const router = express.Router()
const userRoutes = require('./userRoutes.js')
const authRouter = require('./authRoutes.js')

router.use("/user", userRoutes)
router.use("/admin", authRouter)


module.exports = router