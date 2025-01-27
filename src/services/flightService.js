const { FlightRepository , AirplaneRepository } = require('../repository/index');
const { Op } = require('sequelize');

class FlightService {

    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
        this.filter = {};
    }
    
    #createFilter(data){
        let priceFilter = [];
        if(data.minPrice) {
            priceFilter.push({price : {[Op.gte] : data.minPrice}});
        }
        if(data.maxPrice) {
            priceFilter.push({price : {[Op.lte] : data.maxPrice}});
        }
        Object.assign(this.filter , {[Op.and] : priceFilter});
    }

    async createFlight(data) {

        try {
            
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data , totalSeats : airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getFlight(flightId) {

        try {
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getAllFlights(data) {
        try {
            this.#createFilter(data);
            const flights = await this.flightRepository.getAllFlights(this.filter);
            return flights;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

}

module.exports = FlightService;