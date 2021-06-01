const express = require("express");
const orderModal = require("../models/order.model");
const {isAuth} = require("../utils")
const router = express.Router();
// console.log(isAuth)

router.post("/",isAuth,async (req,res) => {
    try {
        if(!req.body.orderItems.orderItems.length) {
            return res.status(400).send({message: "Cart is empty"})
        }
        const order = new orderModal({
            orderItems: req.body.orderItems.orderItems,
            shippingAddress: req.body.orderItems.shippingAddress,
            paymentMethod: req.body.orderItems.paymentMethod,
            itemPrice: req.body.orderItems.itemPrice,
            shippingPrice: req.body.orderItems.shippingPrice,
            taxPrice: req.body.orderItems.taxPrice,
            totalPrice: req.body.orderItems.totalPrice,
            user: req.user._id
        })
        const createdOrder = await order.save();
        res.status(201).json({message: 'Order created successfully!',order: createdOrder})
    }
    catch(e) {
        res.status(500).json(e)
    }
})

router.get("/:id",isAuth, async (req,res) => {
    try {
        const order = await orderModal.findById(req.params.id);
        console.log(order)
        if(!order) {
             return res.status(404).send({message: "Order not found"})
        }
        res.send(order)
    }
    catch(e) {
        res.status(500).send(e)
    }
})


module.exports = router