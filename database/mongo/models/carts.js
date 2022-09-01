const mongoose = require('mongoose')

const Carts = mongoose.model('carts', {
    products:  Array, default: "",
    id: Number
})

module.exports = Carts