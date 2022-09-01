const express = require("express");
const { Router } = express;
const app = express();
const router = Router();
const products = require("./products/controller");
const carts = require("./cart/controller");

router.get("/productos/", products.getAll);

router.post("/productos/", products.add);

router.get("/productos/:id", products.getOne);

router.put("/productos/:id", products.update);

router.delete("/productos/:id", products.delete);

router.get("/carrito/:id/productos", carts.getAllProducts);

router.post("/carrito/:id/productos", carts.addProduct);

router.post("/carrito", carts.add);

router.delete("/carrito/:id/productos/:id_prod", carts.deleteProduct);

router.delete("/carrito/:id", carts.deleteCart);

//app.listen(8081);



module.exports = router