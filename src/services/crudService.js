class CrudService {

    constructor(repository)
    {
        this.repository = repository;
    }

    async create(data) {
        try {
            const result = await this.repository.createEntity(data);
            return result;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async delete(entityId) {
        try {
            const response = await this.repository.deleteEntity(entityId);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async update(entityId , data) {
        try {
            const result = await this.repository.updateEntity(data , entityId);
            return result;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async get(entityId) {
        try {
            const result = await this.repository.getEntity(entityId);
            return result;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports = CrudService;