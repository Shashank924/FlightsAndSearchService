const { Airport } = require('../models/index');
const { Op } = require('sequelize');

class AirportRepository {

    async createAirport(airportData) {
        try {
            const airport = await Airport.create(airportData);
            return airport;
        } catch (error) {
            console.log("Something went wrong at repository layer");
            throw {error};
        }
    }

    async deleteAirport(airportId) {
        try {
            await Airport.destroy({
                where : {
                    id : airportId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong at repository layer");
            throw {error};
        }
    }

    async updateAirport(airportId , airportData) {
        try {
            const airport = await Airport.update(airportData , {
                where : {
                    id : airportId
                }
            });
            return airport;
        } catch (error) {
            console.log("Something went wrong at repository layer");
            throw {error};
        }
    }

    async getAirport(airportId) {
        try {
            const airport = await Airport.findByPk(airportId);
            console.log(airport);
            return airport;
        } catch (error) {
            console.log("Something went wrong at repository layer");
            throw {error};
        }
    }

    async getAllAirports(filter) {
        try {
            const airports = Airport.findAll({
                where : {
                    name : {
                        [Op.startsWith] : filter.name
                    }
                }
            });
            return airports;
        } catch (error) {
            console.log("Something went wrong at repository layer");
            throw {error};
        }
    }
}

module.exports = AirportRepository;