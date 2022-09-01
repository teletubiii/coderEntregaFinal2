const cart = require("./service");
const memoryCartsDao = require('../daos/carts/memoryCartsDao')
const mongoDaoProducts = require('../daos/carts/mongoCartsDao')
class Actions {
  // static getAllProducts(req, res) {
  //   const { id } = req.params
  //   res.send(memoryCartsDao.listOfProducts(parseInt(id)));
  // }

  // static add(req, res) {
  //   res.json(memoryCartsDao.create(req.body));
  // }

  // static addProduct(req, res) {
  //   const { id: cartId } = req.params
  //   const { productId } = req.body

  //   memoryCartsDao.addProduct(parseInt(cartId), parseInt(productId))
  //   res.json('Producto agregado');
  // }

  // static deleteProduct(req, res) {
  //   const { id: cartId, id_prod: productId } = req.params
  //   memoryCartsDao.deleteProduct(parseInt(cartId), parseInt(productId))
  //   res.json(`Se elimino el producto con el id ${productId} del carrito ${cartId}`);
  // }

  // static deleteCart(req, res) {
  //   const { id: cartId } = req.params

  //   res.json(memoryCartsDao.delete(parseInt(cartId)));
  // }

  static async getAllProducts(req, res) {
    const { id } = req.params
    res.send(await mongoDaoProducts.listOfProducts(parseInt(id)));
  }

  static async add(req, res) {
    res.json(await mongoDaoProducts.create(req.body));
  }

  static async addProduct(req, res) {
    const { id: cartId } = req.params
    const { productId } = req.body

    await mongoDaoProducts.addProduct(parseInt(cartId), parseInt(productId))
    res.json('Producto agregado');
  }

  static deleteProduct(req, res) {
    const { id: cartId, id_prod: productId } = req.params
    mongoDaoProducts.deleteProduct(parseInt(cartId), parseInt(productId))
    res.json(`Se elimino el producto con el id ${productId} del carrito ${cartId}`);
  }

  static deleteCart(req, res) {
    const { id: cartId } = req.params

    res.json(mongoDaoProducts.delete(parseInt(cartId)));
  }

}

module.exports = Actions;