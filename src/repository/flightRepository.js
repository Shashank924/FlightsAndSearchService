const { where } = require('sequelize');
const { Flight } = require('../models/index');

class FlightRepository {

    async createFlight(data) {

        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong at Repository layer");
            throw {error};
        }
    }

    async getFlight(flightId){

        try {
            const flight = await Flight.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong at Repository layer");
            throw {error};
        }
    }

    async getAllFlights(filter){
        //console.log(filter);
        try {
            const flights = await Flight.findAll({
                where : filter
            });
            return flights;
        } catch (error) {
            console.log("Something went wrong at Repository layer");
            throw {error};
        }
    }
}

module.exports = FlightRepository;