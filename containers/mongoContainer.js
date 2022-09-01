
const Products = require('../database/mongo/models/products.js')
const mongoose = require('mongoose')
let id = 1


class MongoContainer {

    constructor(model) {
       this.model = model
    }

    async getMaxId() {
        let getAll = await this.model.find({}).exec()
        let max_id = 0

        getAll.forEach(function (object) {
            let x = object.id;

            if (x > max_id) {
                max_id = x
            }
        });

        return max_id
    }

    async list() {
        let getAll = await this.model.find({}).exec()
        return getAll
    }

    async getById(id) {
        const product = await this.model.findOne({ id: id }).exec();
        return product
    }

    async create(entity) {
        entity.id = await this.getMaxId() + 1
        const newEntity = new this.model(entity)
        await newEntity.save()

        return entity
    }

    async update(id, modifications) {
        const productUpdate = await this.model.updateOne({ id: id }, {
            $set: modifications
        })

        return await this.getById(id)
    }

    async delete(id) {
        const deleteOne = await this.model.deleteOne({ id: id })

        if (deleteOne.deletedCount == 0) {
            return false
        } else {
            return true
        }
    }
}

//const mongoContainer = new MongoContainer()

module.exports = MongoContainer