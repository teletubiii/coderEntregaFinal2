class MemoryContainer {
    constructor(entities, id) {
        this.entities = entities
        this.id = id
    }

    list() {
        return this.entities
    }

    getById(id) {
        return this.entities.find(entity => entity.id === id)
    }

    create(entity) {
        entity.id = this.id
        entity.timestamp = Date.now()
        this.entities.push(entity)
        this.id++
        return (entity || { error: 'No se pudo cargar la entidad, revise los datos' })
    }

    update(id, modifications) {

        const entity = this.getById(id)

        if (entity) {
            const updatedEntity = {
                ...entity,
                ...modifications
            }
            this.entities.splice(this.entities.indexOf(entity), 1,updatedEntity)

            return updatedEntity
        } else {
            return 'Entidad no encontrada'
        }
    }

    delete(id) {
        const entity = this.getById(id)
        
        if (entity) {
            this.entities.splice(this.entities.indexOf(entity), 1)
            return 'Entidad eliminada'
        } else {
            return 'Entidad no encontrada'
        }
    }
}







module.exports = MemoryContainer