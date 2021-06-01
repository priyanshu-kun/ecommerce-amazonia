const express = require("express");
const orderModal = require("../models/order.model");
const {isAuth} = require("../utils")
const router = express.Router();
// console.log(isAuth)

router.post("/",isAuth,async (req,res) => {
    try {
        if(!req.body.orderItems.length) {
            return res.status(400).send({message: "Cart is empty"})
        }
        const order = new orderModal({
            orderItems: req.body.orderItems,
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.shippingAddress,
            itemsPrice: req.body.itemsPrice,
            shippingPrice: req.body.shippingPrice,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            user: req.user._id
        })
        const createdOrder = await order.save();
        res.status(201).json({message: 'Order created successfully!',order: createdOrder})
    }
    catch(e) {
        res.status(500).json(e)
    }
})


module.exports = router