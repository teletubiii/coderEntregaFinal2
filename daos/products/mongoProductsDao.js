const MongoContainer = require('../../containers/mongoContainer')
const Products = require('../../database/mongo/models/products')


class MongoProductsDao extends MongoContainer{
    constructor(){
        super(Products)
    }
}

const mongoProductsDao = new MongoProductsDao()

module.exports = mongoProductsDao