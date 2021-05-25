const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {type: String,required: true,unique: true},
    price: {type: Number,require: true},
    image: {type: String,require: true},
    description: {type: String,required: true},
    category: {type: String,required: true},
    rating: {type: Number,required: true},
    reviews: {type: Number,required: true},
    stock: {type: Number,required: true},
},{
    timestamps: true
})

const productModal = mongoose.model("Product",productSchema);

module.exports = productModal