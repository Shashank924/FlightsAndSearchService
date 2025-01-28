
class CrudRepository {

    constructor(model)
    {
        this.model = model;
    }

    async createEntity(data) {
        try {
            console.log(data);
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong at repository layer");
            throw {error};
        }
    }

    async deleteEntity(entityId) {
        try {
            await this.model.destroy({
                where : {
                    id : entityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong at repository layer");
            throw {error};
        }
    }

    async updateEntity(entityId , data) {
        try {
            const result = await this.model.update(data , {
                where : {
                    id : entityId
                }
            });
            return result;
        } catch (error) {
            console.log("Something went wrong at repository layer");
            throw {error};
        }
    }

    async getEntity(entityId) {
        try {
            const result = await this.model.findByPk(entityId);
            return result;
        } catch (error) {
            console.log("Something went wrong at repository layer");
            throw {error};
        }
    }
}

module.exports = CrudRepository;