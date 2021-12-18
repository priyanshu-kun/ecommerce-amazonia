const express = require("express");
// const response = require("../ServerSeed/seed")
const productSeed = require("../ServerSeed/seed")
const productModal = require("../models/product.model")
const router = express.Router()


router.get("/seed",async (req,res) => {
    try {
        const products = await productModal.find({});
        if(products.length) {
            return res.json({products})
        }
        let data = await productSeed()
        console.log(data)
        if(!data) {
            throw new Error();
        }
        data = data.map(item => (
            // Math.round((Math.random()*5 + Number.EPSILON)*100)/100 -> round a decimal number to it's 2 places
            {   
                title: item.title,
                price: item.price,
                description: item.description,
                category: item.category,
                image: item.image,
                rating: Math.round(((Math.random() * (5 - 2 + 1) + 2) + Number.EPSILON)*100)/100,
                reviews: Math.floor(Math.random() * 100)+1,
                stock: Math.floor(Math.random() * 100)
            }
        ))
        const createdProducts = await productModal.insertMany(data);
        res.json({createdProducts})
    }
    catch(e) {
        res.status(500).json(e)
    }
})


router.get("/",async (req,res) => {
    try {
        console.log("kaboom you are here!")
        const products = await productModal.find({});
         console.log("server products: ",products)
        res.json(products);
    }
    catch(e) {
        res.status(500).send(e)
    }
})
router.get("/:id",async (req,res) => {
    try {
        const product = await productModal.findById({_id: req.params.id})
        if(!product) {
            return res.status(404).json({message: "Product not found"})
        }
        res.json(product);
    }
    catch(e) {
        res.status(500).send(e)
    }
})

module.exports = router;