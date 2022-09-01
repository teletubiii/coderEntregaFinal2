const products = require("./service");
const daoProducts = require('../daos/products/memoryProductsDao')
const mongoDaoProducts = require('../daos/products/mongoProductsDao')

class Actions {
  // static getAll(req, res) {
  //   const products = daoProducts.list()
  //   res.send(products);
  // }

  // static getOne(req, res) {
  //   const { id } = req.params;
  //   const product = daoProducts.getById(parseInt(id))
  //   if(!product){
  //     res.json({error: `No se encontro el producto con id ${id}`})
  //   }
  //   res.send(product);
  // }

  // static add(req, res) {
  //   res.send(daoProducts.create(req.body));
  // }

  // static update(req, res) {
  //   const { id } = req.params
  //   const body = req.body
  //   res.send(daoProducts.update(id, body));
  // }

  // static delete(req, res) {
  //   res.send(daoProducts.delete(parseInt(req.params.id)));
  // }

  static async getAll(req, res) {
    const products = await mongoDaoProducts.list()
    res.send(products);
  }

  static async getOne(req, res) {
    const { id } = req.params;
    const product = await mongoDaoProducts.getById(parseInt(id))
    if (!product) {
      res.json({ error: `No se encontro el producto con id ${id}` })
    } else {
      res.send(product);
    }

  }

  static async add(req, res) {
    const product = await mongoDaoProducts.create(req.body);
    if (!product) {
      res.json({ error: `No se pudo agregar el producto` })
    } else {
      res.send(product);
    }
  }

  static async update(req, res) {
    const { id } = req.params
    const body = req.body
    const product = await mongoDaoProducts.update(id, body);

    if (!product) {
      res.json({ error: `No se pudo actualizar el producto` })
    } else {
      res.send(product);
    }
  }

  static async delete(req, res) {
    const product = await mongoDaoProducts.delete(parseInt(req.params.id));

    if (!product) {
      res.json({ error: `El producto no existe` })
    } else {
      res.send('Producto eliminado');
    }
  }

}

module.exports = Actions;