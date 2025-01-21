const { AirportRepository } = require('../repository/index');

class AirportService {

    constructor() {
        this.airportRepositoryObj = new AirportRepository();
    }

    async createAirport(airportData) {
        try {
            const airport = await this.airportRepositoryObj.createAirport(airportData);
            return airport;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async deleteAirport(airportId) {
        try {
            const response = await this.airportRepositoryObj.deleteAirport(airportId);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async updateAirport(airportData , airportId) {
        try {
            const airport = await this.airportRepositoryObj.updateAirport(airportData , airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getAirport(airportId) {
        try {
            const airport = await this.airportRepositoryObj.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getAllAirports(filter) {
        try {
            const airports = await this.airportRepositoryObj.getAllAirports(filter);
            return airports;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports = AirportService;