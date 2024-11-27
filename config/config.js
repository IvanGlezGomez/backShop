const mongoose = require("mongoose")
require("dotenv").config()

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Se ha conectado la BBDD")
    } catch (error) {
        console.error("Nose ha podido conectar con BBDD", err);
        
    }
}

module.exports = dbConnection