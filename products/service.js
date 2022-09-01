const Products = require('../database/mongo/models/products.js')


const products = [{
  name: "productonombre1",
  price: "123",
  thumbnail: "thumbnail.jpg",
  id: 1
}, {
  name: "productonombre2",
  price: "10",
  thumbnail: "thumbnail.jpg",
  id: 2
}]
let id = 1

const listOfProducts = () => {
  return products
}

const getProduct = (id) => {
  return products.find(product => product.id === id)
}

const addProduct = (product) => {
  const newProduct = new Products(product)

  newProduct.save()
  return ("Producto agregado" || { error: 'No se pudo cargar el producto, revise los datos' })
}

const updateProduct = (id, newContent) => {
  const product = getProduct(parseInt(id))

  if ((product.id == id) && (product.id != null)) {
    product.name = newContent.name
    product.price = newContent.price
    product.thumbnail = newContent.thumbnail
    return product
  } else {
    return 'Producto no encontrado'
  }
}

const deleteProduct = (id) => {
  const product = getProduct(parseInt(id))
  if ((product.id == id) && (product.id != null)) {
    products.splice(products.indexOf(product), 1)
    return 'Producto eliminado'
  } else {
    return 'Producto no encontrado'
  }
}

module.exports = { listOfProducts, getProduct, addProduct, updateProduct, deleteProduct }