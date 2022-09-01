const mongoose = require('mongoose')

const connect = () => {
    const atlasUrl = 'mongodb+srv://teletubiii:181298a@cluster0.wrhbekm.mongodb.net/?retryWrites=true&w=majority'
    const mongoConfiguration = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'coderhouse-backend'
    }
    const mongoConnectionCallback = error => {
        if (error) {
            throw new Error(`Error al conectarse con la base de datos ${error}`)
        }

        console.log('Se ha establecido la conexion con Mongo')
    }

    mongoose.connect(atlasUrl, mongoConfiguration, mongoConnectionCallback)
}

module.exports = { connect }