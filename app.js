const express = require("express")
const router = require("./router")
const database = require('./database/mongo/database')
const Products = require('./database/mongo/models/products.js')
//const cartsRouter = require("./cart/router")

database.connect()

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api", router)

app.listen(8080, () => {
    console.log("server up")
})
