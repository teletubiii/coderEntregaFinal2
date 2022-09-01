const MongoContainer = require('../../containers/mongoContainer')
const daoProducts = require('../products/mongoProductsDao')
const Carts = require('../../database/mongo/models/carts')


class MongoCartsDao extends MongoContainer {
    constructor() {
        super(Carts)
    }

    async addProduct(cartId, productId) {
        const cart = await super.getById(cartId)

         if (!cart) {
           return { error: 'cart_not_found' }
         }

        if (cart.products[productId]) {
          return { error: 'product_already_in_cart' }
        }

        const product = await daoProducts.getById(productId)
        
        if (!product) {
          return { error: 'product_not_found' }
        }

        cart.products[productId] = product

        const productUpdate = await Carts.updateOne({ id: cartId }, {
            $set: cart
        })
    

        return cart
    }

    async listOfProducts(id) {
        const cart = await super.getById(id)

        console.log(cart)

        if (!cart) {
            return `No existe carrito con el id ${id}`
        }
        return Object.values(cart.products)
    }


    async deleteProduct(cartId, productId) {
        const cart = await super.getById(cartId)

        if (!cart) {
            return { error: 'cart_not_found' }
        }

        delete cart.products[productId]

        const productUpdate = await Carts.updateOne({ id: cartId }, {
            $set: cart
        })
    }
}





const mongoCartsDao = new MongoCartsDao()

module.exports = mongoCartsDao