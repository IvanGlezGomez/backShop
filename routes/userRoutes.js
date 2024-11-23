const express = require("express")
const router = express.Router()

const Product = require('../models/Product.js')

router.get("/", async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: "Error to get the prodructs"})
    }
})

router.get("/search/:name", async (req, res) => {
    try {
        const name = req.params.name
        const products = await Product.find({
            $or: [
                { author: {$regex: name, $options: 'i'}},
                { _id: {$regex: name, $options: 'i'}},
                { name: {$regex: name, $options: 'i'}},
                { gender: {$regex: name, $options: 'i'}}
            ]
        })
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: "Error to get the prodructs"})
    }
})

router.get("/:productId", async (req, res) => {
    try {
        const _id = req.params.productId
        const product = await Product.findById(_id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: "Error to get the prodructs"})
    }
})

get.post("/", async (req, res) => {
    try {
        const newProduct = new Product({...req.body})
        await newProduct.save()

    } catch (error) {
        res.status(500).json({message: "Error to get the prodructs"})
    }
})

module.exports = router