const MemoryContainer = require('../../containers/memoryContainer')
const daoProducts = require('../products/memoryProductsDao')

let id = 3
let carts = [
  {
    products: {},
    id: 1
  },
  {
    products: {},
    id: 2
  }
]

class MemoryCartsDao extends MemoryContainer {
  constructor() {
    super(carts, id)
  }

  create() {
    return super.create({ products: {} })
  }

  listOfProducts(id) {
    const cart = super.getById(id)
    if (!cart) {
      return `No existe carrito con el id ${id}`
    }
    return Object.values(cart.products)
  }

  addProduct(cartId, productId) {
    const cart = super.getById(cartId)

    if (!cart) {
      return { error: 'cart_not_found' }
    }

    if (cart.products[productId]) {
      return { error: 'product_already_in_cart' }
    }

    const product = daoProducts.getById(productId)
    if (!product) {
      return { error: 'product_not_found' }
    }

    cart.products[productId] = product

    return product
  }

  deleteProduct(cartId, productId) {
    const cart = super.getById(cartId)

    if (!cart) {
      return { error: 'cart_not_found' }
    }

    delete cart.products[productId]
  }

}

const memoryCartsDao = new MemoryCartsDao()

module.exports = memoryCartsDao