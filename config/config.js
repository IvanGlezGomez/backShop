const mongoose = require("mongoose")
require("dotenv").config()

const dbConnection = async () => {
    try {
        console.log(process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Se ha conectado la BBDD")
    } catch (err) {
        console.error("Nose ha podido conectar con BBDD", err);
        
    }
}

module.exports = dbConnection