const MemoryContainer = require('../../containers/memoryContainer')

let id = 3
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

class MemoryProductsDao extends MemoryContainer{
    constructor(){
        super(products, id)
    }
}

const memoryProductsDao = new MemoryProductsDao()

module.exports = memoryProductsDao