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
const products = require('../products/service')
let currentId = 1

const create = () => {

  const cart = {
    products: {},
    id: currentId,
    timestamp: Date.now()
  }
  carts.push(cart)
  currentId++
  return cart.id
}

const listOfProducts = (id) => {
  const cart = carts.find(cart => cart.id === parseInt(id))
  if (!cart) {
    return `No existe carrito con el id ${id}`
  }
  return Object.values(cart.products)
}

const addProduct = (cartId, productId) => {

  const cart = carts.find(cart => cart.id === parseInt(cartId))

  if (!cart) {
    return { error: 'cart_not_found' }
  }

  if (cart.products[productId]) {
    return { error: 'product_already_in_cart' }
  }

  const product = products.getProduct(productId)
  if (!product) {
    return { error: 'product_not_found' }
  }


  cart.products[productId] = product
}

const deleteProduct = (cartId, productId) => {
  const cart = carts.find(cart => cart.id === parseInt(cartId))
 
  if (!cart) {
    return { error: 'cart_not_found' }
  }

  delete cart.products[productId]

  return `Se elimino el producto con el id ${productId} del carrito ${cartId}`
}

const deleteCart = (cartId) => {
  const cart = carts.find(cart => cart.id === parseInt(cartId))

  if (!cart) {
    return { error: 'cart_not_found' }
  }

  carts = carts.filter(cart => parseInt(cartId) !== cart.id )
  
  return 'Carrito eliminado'

}
module.exports = { create, listOfProducts, addProduct, deleteProduct, deleteCart }