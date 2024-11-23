const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    _id: String,
    name: String,
    price: Number,
    stock: Number,
    Type: String,
    data: Array
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product

