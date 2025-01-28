const CrudService = require("./crudService");
const AirplaneRepository  = require('../repository/airplaneRepository');

class AirplaneService extends CrudService {

    constructor() {
        const airplaneRepository = new AirplaneRepository();
        super(airplaneRepository);
    }
}

module.exports = AirplaneService;