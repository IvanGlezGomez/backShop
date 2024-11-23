const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    _id: String,
    name: String,
    price: Number,
    stock: Number,
    type: String,
    gender: String,
    author: String,
    description: String,
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product

