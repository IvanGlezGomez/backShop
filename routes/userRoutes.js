const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')

const Product = require('../models/Product.js')

router.get("/", async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: "Error to get the prodructs"})
    }
})

router.get("/search", async (req, res) => {
    const query = req.query.query
    if (!query){
        return res.status(400).json({message: 'Parametro de busqueda vacio'})
    }
    try {
        const regex = new RegExp(query, 'i')
        
        const products = await Product.find({
            $or: [
                { isbn:   {$regex: regex}},
                { name:   {$regex: regex}},
                { gender: {$regex: regex}},
                { author: {$regex: regex}},
            ]
        })

        if (products.length === 0) { 
            return res.status(404).json({ message: "No se encontraron productos que coincidan con la búsqueda" })
        }
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

router.post("/create", async (req, res) => {
    try {
        const newProduct = new Product({...req.body})
        await newProduct.save()
        res.json({newProduct})

    } catch (error) {
        res.status(500).json(
        {
            message: "Error to send the prodructs",
            err: error
        })
    }
})

router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) { 
        return res.status(400).json({ message: "ID no válido" })
    }
    try {   
        const deletedProduct = await Product.findByIdAndDelete(id)
        if (!deletedProduct) { return res.status(404).json({ message: "Producto no encontrado", id }); }
        res.status(200).json({message: 'Borrado con exito', deletedProduct})
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el producto", error})
    }
})

module.exports = router