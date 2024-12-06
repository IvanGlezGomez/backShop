const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    isbn: String,
    name: String,
    price: Number,
    stock: Number,
    type: String,
    gender: String,
    subGenre: String,
    author: String,
    description: String,
    image: String,
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product

