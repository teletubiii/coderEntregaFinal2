const mongoose = require('mongoose')

const Products = mongoose.model('products', {
    name: String,
    price: Number,
    id: Number
})

module.exports = Products